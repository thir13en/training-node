import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "../environments/environment";
import { ENDPOINTS } from "../network";

 @Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(urlFragment: ENDPOINTS, payload: { param: string, value: string }[]): Observable<any> {
    const params: HttpParams = new HttpParams();
    params.set(payload[0].param, payload[0].value);
    debugger;
    return this.http.get([environment.apiUrl, urlFragment].join('/'), { params });
  }
}
