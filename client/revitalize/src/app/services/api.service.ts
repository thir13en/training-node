import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { ENDPOINTS } from '@network/endpoints.enum';
import { NetworkInterfaces } from '@network/interfaces';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(data: NetworkInterfaces.Get): Observable<any> {
    // TODO: Make sure we get the correct param cosntruction service
    const url = this.getFullUrlWithPath(data.path, data.pathParams);

    return this.http.get(
      url,
      { params: this.addQueryParams(data.queryParams) },
    ).pipe(
      catchError((err: Error): ObservableInput<any> => throwError(err)),
    );
  }

  post(data: NetworkInterfaces.POST): Observable<any> {
    const url = this.getFullUrlWithPath(data.path, data.pathParams);

    return this.http.post(url, data.payload);
  }

  private getFullUrlWithPath(urlFragment: ENDPOINTS, pathParams: (string | number)[]): string {
    return [environment.apiUrl, urlFragment].join('/');
  }

  private addQueryParams(payload: { param: string, value: string }[]): HttpParams | undefined {
    let params: HttpParams;

    if (payload) {
      params = new HttpParams();

      payload.forEach((el: { param: string, value: string }) =>
        params = params.keys().length ? params.set(el.param, el.value) : params.append(el.param, el.value)
      );
    }

    return params;
  }

}
