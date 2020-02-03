import { of as observableOf } from 'rxjs';

import { ApiService } from '@services/api.service';


export class ApiServiceMock {
  get(param: any) {
    return observableOf([
      {
        _id: '5dfc9115993ccd356e259824',
        created: '2019-12-20T09:15:01.036Z',
        type: 'Thai',
        price: 120,
        description: 'Thai massage or Thai yoga massage is a traditional healing system combining acupressure',
        imageUrl: 'https://duckduckgo.com/i/ef519cbe.jpg',
      },
    ]);
  }
}

export const API_SERVICE_MOCK_PROVIDER = { provide: ApiService, useClass: ApiService };
