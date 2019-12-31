import { InjectionToken } from '@angular/core';

export const ROUTE_FRAGMENTS: any = {
  ROOT: '',
  MASSAGES: 'massages',
  NEW: 'new',
  EDIT: 'edit',
  IDENTIFIER: ':id',
};

export const ROUTES: any = {
  ROOT: '/',
  MASSAGES: [ROUTE_FRAGMENTS.ROOT, ROUTE_FRAGMENTS.MASSAGES].join('/'),
  MASSAGES_NEW: [ROUTE_FRAGMENTS.ROOT, ROUTE_FRAGMENTS.MASSAGES, ROUTE_FRAGMENTS.NEW].join('/')
};

export const ROUTE_FRAGMENTS_INJECTABLE = new InjectionToken<any>(
  'RoutesFragments',
  {
    providedIn: 'root',
    factory: () => ROUTE_FRAGMENTS
  },
);
export const ROUTES_INJECTABLE = new InjectionToken<any>(
  'RoutesFragments',
  {
    providedIn: 'root',
    factory: () => ROUTES
  },
);
