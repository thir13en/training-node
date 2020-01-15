import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { MassageModel } from '@core/models';
import { NetworkUtils } from '@app/network';
import { ROUTE_FRAGMENTS } from '@routes/routes';
import { ApiService } from '@services/api.service';


@Component({
  templateUrl: './massages-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesEditComponent implements OnInit {

  massage$: Observable<MassageModel>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    const massageId: string = this.route.snapshot.params[ROUTE_FRAGMENTS.MASSAGE_IDENTIFIER.replace(':', '')];

    this.massage$ = this.apiService.get({ path: NetworkUtils.ENDPOINTS.MASSAGES_DETAIL, pathParams: [massageId] });
  }

}
