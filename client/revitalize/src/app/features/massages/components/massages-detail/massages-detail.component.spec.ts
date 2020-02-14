import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { mockResponses } from '@testing/mocks';
import { ApiService } from '@services/api.service';
import { MassagesDetailComponent } from './massages-detail.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


fdescribe('MassagesDetailComponent', () => {
  let component: MassagesDetailComponent;
  let fixture: ComponentFixture<MassagesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [MassagesDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { massageId: 'something' } } } },
      ]
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
