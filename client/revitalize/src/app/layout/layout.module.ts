import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from '@layout/layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
