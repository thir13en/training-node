import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassagesRoutingModule } from './massages-routing.module';

import { MassagesComponent } from './components/massages/massages.component';

import { ApiService } from '@services/api.service';


@NgModule({
  declarations: [MassagesComponent],
  imports: [
    CommonModule,
    MassagesRoutingModule
  ],
  providers: [
    ApiService,
  ]
})
export class MassagesModule { }
