import { NgModule } from '@angular/core';

import { MaterialNavigationModule } from '@ui/angular-material/material-navigation.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  imports: [
    LayoutRoutingModule,
    MaterialNavigationModule,
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
