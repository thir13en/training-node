import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ENDPOINTS } from '@network/endpoints.enum';
import { ApiService } from '@services/api.service';


@Component({
  templateUrl: './massages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.get(ENDPOINTS.MASSAGES).subscribe(
      (res: any): void => console.log(res),
      (err: HttpErrorResponse): void => console.log(err),
    );
  }

}
