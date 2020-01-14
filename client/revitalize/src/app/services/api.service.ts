import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { ErrorCodes } from '@core/errors';
import { NetworkInterfaces } from '@network/interfaces';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(data: NetworkInterfaces.Get): Observable<any> {
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

  private getFullUrlWithPath(urlFragment: string, pathParams: (string | number)[]): string {
    const paramCount: number = (urlFragment.match(/%s/g) || []).length;
    // TODO: create centralized error managing
    if (paramCount !== pathParams.length) {
      throw new Error(ErrorCodes.e001);
    } else {

    }
    return [environment.apiUrl, urlFragment].join('/');
  }

  private addParamsToPath(path: string, params: (string | number)[]): string {
    // TODO: add path params
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
