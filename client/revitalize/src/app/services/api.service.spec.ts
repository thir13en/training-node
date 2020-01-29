import { async, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { ApiService } from '@services/api.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from '@environments/environment';


describe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ApiService],
    });
  }));

  beforeEach((): void => {
    service = TestBed.inject<ApiService>(ApiService);
    http = TestBed.inject<HttpClient>(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should build the right url from path', () => {
    const spy = spyOn(http, 'get').and.returnValues(EMPTY);
    const path = 'endpoint';

    service.get({ path });

    expect(spy).toHaveBeenCalledWith([environment.apiUrl, path].join('/'));
  });

  // TODO: add test with params

});
