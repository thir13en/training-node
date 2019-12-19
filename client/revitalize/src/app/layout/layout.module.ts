import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { MaterialNavigationModule } from '@ui/angular-material/material-navigation.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule,
    MaterialNavigationModule,
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
