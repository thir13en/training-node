import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import copy from './massages.copy.json';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ROUTE_FRAGMENTS_INJECTABLE } from '@routes/routes';
import { ENDPOINTS } from '@network/endpoints.enum';
import { ApiService } from '@services/api.service';
import { MassageModel } from '@core/models';


@Component({
  templateUrl: './massages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComponent implements OnInit {
  copy: any;

  massages$: Observable<MassageModel[]>;

  constructor(
    private apiService: ApiService,
    @Inject(ROUTE_FRAGMENTS_INJECTABLE) public routesFragments,
  ) {}

  ngOnInit() {
    this.copy = copy;

    this.massages$ = this.apiService.get(ENDPOINTS.MASSAGES).pipe(
      map((res: any[]): MassageModel[] => res.map((r: any): MassageModel => new MassageModel(r))),
    );
  }

}
