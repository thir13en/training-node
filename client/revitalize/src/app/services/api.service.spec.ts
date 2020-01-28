import { async, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { ApiService } from '@services/api.service';


describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ApiService],
    });
  }));

  beforeEach((): void => {
    service = TestBed.inject<ApiService>(ApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
