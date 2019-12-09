import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { ENDPOINTS } from '../network';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(urlFragment: ENDPOINTS, payload?: { param: string, value: string }[]): Observable<any> {
    if (payload) {
      const params = this.addQueryParams(payload);
      return this.http.get([environment.apiUrl, urlFragment].join('/'), { params });
    } else {
      return this.http.get([environment.apiUrl, urlFragment].join('/'));
    }
  }

  private addQueryParams(payload: { param: string, value: string }[]): HttpParams {
    let params: HttpParams = new HttpParams();

    payload.forEach((el: { param: string, value: string }) =>
        params = params.keys().length ?
            params.set(el.param, el.value) :
            params.append(el.param, el.value)
    );

    return params;
  }

}
