import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagesNewComponent } from './massages-new.component';

describe('MassagesNewComponent', () => {
  let component: MassagesNewComponent;
  let fixture: ComponentFixture<MassagesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassagesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
