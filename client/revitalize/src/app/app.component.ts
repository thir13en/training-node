import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { ENDPOINTS } from "../network";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  movies$: Observable<any[]>;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.movies$ = this.apiService.get(ENDPOINTS.MOVIES).pipe(
      filter((res: any): boolean => res.Response),
      map((res: any): any[] => res.Search),
    );
  }

  submit(form: NgForm): void {
    this.apiService.get(ENDPOINTS.SEARCH).subscribe(
      (res: any) => console.log(res),
      (err: Error) => console.error(err),
    )
  }

}
