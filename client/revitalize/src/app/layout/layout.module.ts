import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from '@layout/layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  imports: [LayoutRoutingModule],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
