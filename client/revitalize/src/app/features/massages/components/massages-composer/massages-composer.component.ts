import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import copy from './massages-composer.copy.json';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NetworkUtils } from '@app/network';
import { routing } from '@app/routes';
import { ROUTE_FRAGMENTS } from '@routes/routes';
import { ApiService } from '@services/api.service';


interface MassagePost { type: string; price: number; imageUrl: string; description: string; }

@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-composer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComposerComponent implements OnInit {
  copy: any;

  massageForm: FormGroup;
  editMode: boolean;
  private massageId: string;

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

    this.massageId = this.route.snapshot.params[ROUTE_FRAGMENTS.MASSAGE_IDENTIFIER.replace(':', '')];

    if (this.massageId) {
      this.editMode = true;
      this.apiService.get({ path: NetworkUtils.ENDPOINTS.MASSAGES_DETAIL, pathParams: [this.massageId] }).pipe(
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

  private accumulatorTouchedFields(accumulator: any, controlName: string): any {
    const controls = this.massageForm.controls;

    // first iteration
    if (typeof accumulator === 'string') {
      accumulator = controls[accumulator].pristine ? { } : { [accumulator]: controls[accumulator].value };
    }

    return controls[controlName].pristine ? accumulator : { ...accumulator, [controlName]: controls[controlName].value };
  }

  onSubmit(): void {
    const { type, price, imageUrl, description } = this.massageForm.controls;
    const path: string = this.editMode ? NetworkUtils.ENDPOINTS.MASSAGES_EDIT : NetworkUtils.ENDPOINTS.MASSAGES;
    const httpMethod: (data: any) => Observable<any> = (this.editMode ? this.apiService.put : this.apiService.post).bind(this.apiService);
    const editedData: any = Object.keys(this.massageForm.controls).reduce(this.accumulatorTouchedFields.bind(this));
    const massageData: MassagePost = this.editMode ? editedData : {
      type: type.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
    };

    httpMethod({
      path,
      payload: massageData,
      pathParams: [this.massageId],
    }).subscribe(
      () => this.router.navigateByUrl(routing.ROUTES.MASSAGES),
    );
  }

}
