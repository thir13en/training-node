import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import copy from './app.copy.json';

import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { ENDPOINTS } from '../network';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

}
