import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { TestingModule } from '@testing/testing.module';
import { ActivatedRouteMock, mockResponses } from '@testing/mocks';
import { ApiService } from '@services/api.service';
import { MassagesDetailComponent } from './massages-detail.component';


describe('MassagesDetailComponent', () => {
  let component: MassagesDetailComponent;
  let fixture: ComponentFixture<MassagesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, MatCardModule],
      declarations: [MassagesDetailComponent],
    }).overrideComponent(
      MassagesDetailComponent,
      {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should display a massage', () => {
    // get mock activated route and set mock params snapshot
    const route = TestBed.inject(ActivatedRoute);
    (route as ActivatedRouteMock).setSnapshotParams({ massageId: 'something' });
    // get and mock service response
    const service = TestBed.inject(ApiService);
    spyOn(service, 'get').and.returnValues(mockResponses.getMassageResponse);

    // trigger change detection
    component.ngOnInit();
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;

    expect(el.innerText).toEqual('Californian massage');
  });

});
