import { ENDPOINTS } from '@app/network';


export interface Get {
  path: ENDPOINTS;
  pathParams?: (string | number)[];
  queryParams?: { param: string, value: string }[];
}

export interface POST {
  path: ENDPOINTS;
  payload: any;
  pathParams?: (string | number)[];
}
