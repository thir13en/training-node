import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import copy from './massages-composer.copy.json';

import { ApiService } from '@services/api.service';
import { NetworkUtils } from '@app/network';
import { routing } from '@app/routes';
import { ROUTE_FRAGMENTS } from '@routes/routes';
import { tap } from 'rxjs/operators';
import { NetworkInterfaces } from '@network/interfaces';
import { Observable } from 'rxjs';


interface MassagePost { type: string; price: number; imageUrl: string; description: string; }

@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-composer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComposerComponent implements OnInit {
  copy: any;
  massageForm: FormGroup;
  // if we are in edit mode this will be true
  editMode: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.copy = copy;

    this.massageForm = this.fb.group({
      type: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(5), Validators.max(300)]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    const massageId: string = this.route.snapshot.params[ROUTE_FRAGMENTS.MASSAGE_IDENTIFIER.replace(':', '')];

    if (massageId) {
      this.editMode = true;
      this.apiService.get({ path: NetworkUtils.ENDPOINTS.MASSAGES_DETAIL, pathParams: [massageId] }).pipe(
        tap(this.setMassageFormInfo.bind(this))
      ).subscribe();
    }
  }

  private setMassageFormInfo(massageRes: any): void {
    this.massageForm.setValue({
      type: massageRes.type,
      price: massageRes.price,
      imageUrl: massageRes.imageUrl,
      description: massageRes.description,
    });
  }

  onSubmit(): void {
    const { type, price, imageUrl, description } = this.massageForm.controls;
    const newMassage: MassagePost = {
      type: type.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
    };
    const httpMethod: (data: any) => Observable<any> = this.editMode ? this.apiService.put : this.apiService.post;

    httpMethod({ path: NetworkUtils.ENDPOINTS.MASSAGES, payload: newMassage })
      .pipe(
        tap(console.log),
      )
      .subscribe(
      () => this.router.navigateByUrl(routing.ROUTES.MASSAGES),
      );
  }

}
