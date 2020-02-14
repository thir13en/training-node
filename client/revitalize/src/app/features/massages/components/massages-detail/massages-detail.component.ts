import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import copy from './massages-detail.copy.json';

import { Observable } from 'rxjs';

import { MassageModel } from '@core/models';
import { ROUTE_FRAGMENTS, ROUTE_FRAGMENTS_INJECTABLE } from '@routes/routes';
import { NetworkUtils } from '@app/network';
import { ApiService } from '@services/api.service';


@Component({
  selector: 'app-massages-detail',
  templateUrl: './massages-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesDetailComponent implements OnInit {
  copy: any;
  private massageId: string;
  massage$: Observable<MassageModel>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    @Inject(ROUTE_FRAGMENTS_INJECTABLE) public routesFragments: any,
  ) { }

  ngOnInit() {
    this.copy = copy;
    this.massageId = this.route.snapshot.params[ROUTE_FRAGMENTS.MASSAGE_IDENTIFIER.replace(':', '')];

    if (this.massageId) {
      this.massage$ = this.apiService.get({ path: NetworkUtils.ENDPOINTS.MASSAGES_DETAIL, pathParams: [this.massageId] });
    }
  }

}
