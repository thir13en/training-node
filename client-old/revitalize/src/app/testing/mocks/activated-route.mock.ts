import { ActivatedRoute, convertToParamMap, ParamMap, Params } from '@angular/router';
import { Observable, of } from 'rxjs';


export class ActivatedRouteMock extends ActivatedRoute {
  snapshot: any = {
    params: {},
    paramMap: convertToParamMap({}),
  };

  get paramMap(): Observable<ParamMap> {
    return of(convertToParamMap(this.snapshot.params));
  }

  setSnapshotParams(params: Params): void {
    this.snapshot = {
      params,
      paramMap: convertToParamMap(params),
    };
  }
}

export const ACTIVATED_ROUTE_MOCK_PROVIDER = { provide: ActivatedRoute, useClass: ActivatedRouteMock };
