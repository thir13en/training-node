import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EMPTY } from 'rxjs';

import { TestingModule } from '@app/testing/testing.module';
import { MaterialFormControlsModule } from '@ui/angular-material/material-form-controls.module';
import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';
import { ApiService } from '@services/api.service';
import { MassagesComposerComponent } from './massages-composer.component';


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

  it('should post on creation mode', () => {
    const service = TestBed.inject(ApiService);
    const spyPut = spyOn(service, 'put').and.returnValues(EMPTY);
    const spyPost = spyOn(service, 'post').and.returnValues(EMPTY);

    component.onSubmit();

    expect(spyPut).not.toHaveBeenCalled();
    expect(spyPost).toHaveBeenCalled();
  });

  it('should put on edit mode', () => {
    const service = TestBed.inject(ApiService);
    const spyPut = spyOn(service, 'put').and.returnValues(EMPTY);
    const spyPost = spyOn(service, 'post').and.returnValues(EMPTY);

    component.editMode = true;
    component.onSubmit();

    expect(spyPost).not.toHaveBeenCalled();
    expect(spyPut).toHaveBeenCalled();
  });

});
