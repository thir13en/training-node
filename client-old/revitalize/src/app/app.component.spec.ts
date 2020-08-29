import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { TestingModule } from './testing/testing.module';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AppComponent],
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => expect(component).toBeTruthy());

});
