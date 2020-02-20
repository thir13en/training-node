export interface GET {
  path: string;
  pathParams?: (string | number)[];
  queryParams?: { param: string, value: string }[];
}

export interface POST {
  path: string;
  payload: any;
  pathParams?: (string | number)[];
}

export interface PUT {
  path: string;
  payload: any;
  pathParams?: (string | number)[];
}
