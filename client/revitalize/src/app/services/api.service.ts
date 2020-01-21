import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { ErrorCodes, errorHandler } from '@core/errors';
import { NetworkUtils } from '@app/network';
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
      tap(console.log),
      catchError((err: Error): ObservableInput<any> => throwError(err)),
    );
  }

  post(data: NetworkInterfaces.POST): Observable<any> {
    const url = this.getFullUrlWithPath(data.path, data.pathParams);

    return this.http.post(url, data.payload).pipe(
      tap(console.log),
      catchError((err: Error): ObservableInput<any> => throwError(err)),
    );
  }

  put(data: NetworkInterfaces.PUT): Observable<any> {
    const url = this.getFullUrlWithPath(data.path, data.pathParams);

    return this.http.put(url, data.payload).pipe(
      tap(console.log),
      catchError((err: Error): ObservableInput<any> => throwError(err)),
    );
  }

  private getFullUrlWithPath(urlFragment: string, pathParams: (string | number)[] = []): string {
    const paramCount: number = (urlFragment.match(/%s/g) || []).length;

    errorHandler(paramCount !== pathParams.length, ErrorCodes.e000);

    return [environment.apiUrl, this.addParamsToPath(urlFragment, pathParams)].join('/');
  }

  private addParamsToPath(path: string, params: (string | number)[]): string {

    params.forEach((param: string): void => {
      path = path.replace(NetworkUtils.PATH_PARAM_PLACEHOLDER, param);
    });

    return path;
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
