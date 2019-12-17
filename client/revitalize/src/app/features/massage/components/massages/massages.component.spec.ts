import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { MassagesComponent } from './massages.component';

describe('MassagesComponent', () => {
  let component: MassagesComponent;
  let fixture: ComponentFixture<MassagesComponent>;

  beforeEach(async(
    () => TestBed.configureTestingModule(
      {
        imports: [TestingModule],
        declarations: [MassagesComponent],
      }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

});
