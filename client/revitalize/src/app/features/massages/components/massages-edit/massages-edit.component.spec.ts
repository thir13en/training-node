import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagesEditComponent } from './massages-edit.component';

describe('MassagesEditComponent', () => {
  let component: MassagesEditComponent;
  let fixture: ComponentFixture<MassagesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassagesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
