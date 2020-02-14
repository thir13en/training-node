import { ActivatedRoute, convertToParamMap, Params } from '@angular/router';


export class ActivatedRouteMock extends ActivatedRoute {
  snapshot: any = {
    params: '',
  };

  setSnapshotParams(params: Params): void {
    this.snapshot.params = convertToParamMap(params);
  }
}

export const ACTIVATED_ROUTE_MOCK_PROVIDER = { provide: ActivatedRoute, useClass: ActivatedRouteMock };
