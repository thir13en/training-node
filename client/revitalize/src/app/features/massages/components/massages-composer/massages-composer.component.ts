import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import copy from './massages-composer.copy.json';

import { ApiService } from '@services/api.service';
import { NetworkUtils } from '@app/network';
// import { routing } from '@app/routes';
import { ROUTE_FRAGMENTS } from '@routes/routes';
import { Observable } from 'rxjs';
import { MassageModel } from '@core/models';


type MassagePost = { type: string, price: number, imageUrl: string, description: string };

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
  // the item we are editing in case we are in edit mode, otherwise undefined
  massage$: Observable<MassageModel>;

  constructor(
    // private router: Router,
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
      this.massage$ = this.apiService.get({ path: NetworkUtils.ENDPOINTS.MASSAGES_DETAIL, pathParams: [massageId] });
    }
  }

  onSubmit(): void {
    const { type, price, imageUrl, description } = this.massageForm.controls;
    const newMassage: MassagePost = {
      type: type.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
    };
    console.log(newMassage);
    debugger;
    // this.apiService.post({ path: NetworkUtils.ENDPOINTS.MASSAGES, payload: newMassage }).subscribe(
    //   (res: any) => this.router.navigateByUrl(routing.ROUTES.MASSAGES),
    //   err => console.error(err),
    // );
  }

}
