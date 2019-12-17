import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class MaterialNavigationModule { }
