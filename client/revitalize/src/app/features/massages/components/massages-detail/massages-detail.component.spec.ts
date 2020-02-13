import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { mockResponses } from '@testing/mocks';
import { ApiService } from '@services/api.service';
import { MassagesDetailComponent } from './massages-detail.component';


describe('MassagesDetailComponent', () => {
  let component: MassagesDetailComponent;
  let fixture: ComponentFixture<MassagesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [MassagesDetailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should display a massage', () => {
    const service = TestBed.inject(ApiService);
    spyOn(service, 'get').and.returnValues(mockResponses.getMassageResponse);
    // TODO: select expected massage title and test for failure case

    expect(component).toBeTruthy();
  });

});
