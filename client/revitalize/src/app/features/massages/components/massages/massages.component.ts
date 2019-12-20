import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ENDPOINTS } from '@network/endpoints.enum';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './massages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComponent implements OnInit {
  massages$: Observable<any>;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.massages$ = this.apiService.get(ENDPOINTS.MASSAGES);
  }

}
