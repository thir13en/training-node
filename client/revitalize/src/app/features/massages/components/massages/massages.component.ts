import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ENDPOINTS } from '@network/endpoints.enum';
import { ApiService } from '@services/api.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './massages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.get(ENDPOINTS.MASSAGES).pipe(
      catchError((err: Observable<Error>) => err.subscribe(err => console.log(err)))
    );
  }

}
