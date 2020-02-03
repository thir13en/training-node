import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { API_SERVICE_MOCK_PROVIDER } from '@testing/mocks/api.service.mock';
import { MassagesComponent } from './massages.component';


fdescribe('MassagesComponent', () => {
  let component: MassagesComponent;
  let fixture: ComponentFixture<MassagesComponent>;

  beforeEach(async(
    () => TestBed.configureTestingModule(
      {
        imports: [TestingModule],
        declarations: [MassagesComponent],
        providers: [API_SERVICE_MOCK_PROVIDER],
      }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should create', () => {
    // TODO: check that massage is correctly printed spying on get method
    expect(component).toBeTruthy();
  });

});
