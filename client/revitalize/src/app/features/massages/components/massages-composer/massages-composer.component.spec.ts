import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { MaterialFormControlsModule } from '@ui/angular-material/material-form-controls.module';
import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';
import { MassagesComposerComponent } from './massages-composer.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';


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
      }).overrideComponent(
        MassagesComposerComponent,
        { set: { changeDetection: ChangeDetectionStrategy.Default } }
      ).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should detect edit mode text', () => {
    let buttonText: string = fixture.debugElement.query(By.css('button')).nativeElement.innerText;

    expect('Add massage').toEqual(buttonText);

    component.editMode = true;
    fixture.detectChanges();
    buttonText = fixture.debugElement.query(By.css('button')).nativeElement.innerText;

    expect('Edit massage').toEqual(buttonText);
  });

  // TODO: add testing to check form data is correctly gathered

});
