import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import copy from './app.copy.json';

import { Observable } from 'rxjs';

import { ApiService } from './services/api.service';
import { ENDPOINTS } from '../network';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  massages$: Observable<any[]>;
  copy: any;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.copy = copy;
    this.massages$ = this.apiService.get(ENDPOINTS.MASSAGES);
  }

  submit(newMassageFrom: NgForm): void {
    this.apiService.post(
      ENDPOINTS.MASSAGES,
      { type: newMassageFrom.controls.massageType.value, price: newMassageFrom.controls.price.value }
    ).subscribe(
      (res: any): void => console.log(res),
      (err: HttpErrorResponse): void => console.log(err),
    );
  }

}
