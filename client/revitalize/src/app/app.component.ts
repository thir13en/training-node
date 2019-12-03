import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import copy from './app.copy.json';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { ENDPOINTS } from '../network';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  movies$: Observable<any[]>;
  copy: any;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.copy = copy;
  }

  submit({ form}: NgForm): void {
    const params: { param: string, value: string }[] = [];

    params.push({ param: 'search', value: form.controls.search.value });

    this.movies$ = this.apiService.get(ENDPOINTS.MOVIES, params).pipe(
      filter((res: any): boolean => res.Response),
      map((res: any): any[] => res.Search),
    );

  }

}
