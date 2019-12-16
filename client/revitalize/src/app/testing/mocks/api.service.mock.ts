import { ApiService } from '@services/api.service';


export class ApiServiceMock {}

export const API_SERVICE_MOCK_PROVIDER = { provide: ApiService, useClass: ApiService };
