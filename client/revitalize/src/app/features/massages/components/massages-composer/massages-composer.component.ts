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


@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-composer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComposerComponent implements OnInit {
  copy: any;
  // TODO: pass template driven form to reactive form
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
      price: ['', [Validators.required]],
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
    // TODO: add reactive form here
    debugger;
    // this.apiService.post({ path: NetworkUtils.ENDPOINTS.MASSAGES, payload: newMassage}).subscribe(
    //   (res: any) => this.router.navigateByUrl(routing.ROUTES.MASSAGES),
    //   err => console.error(err),
    // );
  }

}
