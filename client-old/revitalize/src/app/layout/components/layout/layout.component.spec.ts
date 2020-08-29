import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '@app/testing/testing.module';
import { MaterialNavigationModule } from '@ui/angular-material/material-navigation.module';
import { LayoutComponent } from './layout.component';


describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(
    async(() => TestBed.configureTestingModule({
      imports: [
        TestingModule,
        MaterialNavigationModule,
      ],
      declarations: [LayoutComponent],
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

});
