import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../environments/environment";

 @Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(urlFragment: string): Observable<any> {
    return this.http.get([environment.apiUrl, urlFragment].join('/'));
  }
}
