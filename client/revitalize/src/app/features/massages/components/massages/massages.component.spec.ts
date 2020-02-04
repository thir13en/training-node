import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of as observableOf } from 'rxjs';

import { ApiService } from '@services/api.service';
import { TestingModule } from '@testing/testing.module';
import { API_SERVICE_MOCK_PROVIDER } from '@testing/mocks/api.service.mock';
import { MassagesComponent } from './massages.component';


const massageExample = {
  _id: '5dfc9115993ccd356e259824',
  created: '2019-12-20T09:15:01.036Z',
  type: 'Thai',
  price: 120,
  description: 'Thai massage or Thai yoga massage is a traditional healing system combining acupressure',
  imageUrl: 'https://duckduckgo.com/i/ef519cbe.jpg',
};

describe('MassagesComponent', () => {
  let component: MassagesComponent;
  let fixture: ComponentFixture<MassagesComponent>;

  beforeEach(async(
    () => TestBed.configureTestingModule(
      {
        imports: [TestingModule],
        declarations: [MassagesComponent],
        providers: [API_SERVICE_MOCK_PROVIDER],
      }).overrideComponent(
        MassagesComponent,
        {
          set: {
            changeDetection: ChangeDetectionStrategy.Default,
          }
        }
      ).compileComponents()
  ));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => expect(component).toBeTruthy());

  it('should display massages', async(() => {
    const service: ApiService = TestBed.inject(ApiService);
    spyOn(service, 'get').and.returnValue(observableOf([massageExample]));

    component.ngOnInit();
    fixture.detectChanges();
    const massageName = fixture.debugElement.query(By.css('mat-card-title')).nativeElement.innerText;

    expect(massageName).toEqual('Thai');
  }));

});
