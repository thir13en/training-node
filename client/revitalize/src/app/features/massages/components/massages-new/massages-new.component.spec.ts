import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { MassagesNewComponent } from './massages-new.component';
import { MaterialFormControlsModule } from '@ui/angular-material/material-form-controls.module';
import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';


describe('MassagesNewComponent', () => {
  let component: MassagesNewComponent;
  let fixture: ComponentFixture<MassagesNewComponent>;

  beforeEach(async(
    () => TestBed.configureTestingModule(
      {
        imports: [
          TestingModule,
          MaterialLayoutModule,
          MaterialFormControlsModule,
        ],
        declarations: [MassagesNewComponent],
      }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
