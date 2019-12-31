import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import copy from './massages.copy.json';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTE_FRAGMENTS_INJECTABLE } from '@routes/routes';
import { ENDPOINTS } from '@network/endpoints.enum';
import { ApiService } from '@services/api.service';


@Component({
  templateUrl: './massages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComponent implements OnInit {
  copy: any;

  massages$: Observable<any>;

  constructor(
    private apiService: ApiService,
    @Inject(ROUTE_FRAGMENTS_INJECTABLE) public routesFragments,
  ) {}

  ngOnInit() {
    this.copy = copy;
    // TODO: create massage model
    this.massages$ = this.apiService.get(ENDPOINTS.MASSAGES).pipe(
      tap(console.log),
    );
  }

}
