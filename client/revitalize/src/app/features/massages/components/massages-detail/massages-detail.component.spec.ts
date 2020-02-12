import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagesDetailComponent } from './massages-detail.component';

describe('MassagesDetailComponent', () => {
  let component: MassagesDetailComponent;
  let fixture: ComponentFixture<MassagesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassagesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  // TODO: add tests for TDD
});
