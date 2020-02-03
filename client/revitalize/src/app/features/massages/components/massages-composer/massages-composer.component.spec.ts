import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { MassagesComposerComponent } from './massages-composer.component';
import { MaterialFormControlsModule } from '@ui/angular-material/material-form-controls.module';
import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';


describe('MassagesComposerComponent', () => {
  let component: MassagesComposerComponent;
  let fixture: ComponentFixture<MassagesComposerComponent>;

  beforeEach(async(
    () => TestBed.configureTestingModule(
      {
        imports: [
          TestingModule,
          MaterialLayoutModule,
          MaterialFormControlsModule,
        ],
        declarations: [MassagesComposerComponent],
      }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

});
