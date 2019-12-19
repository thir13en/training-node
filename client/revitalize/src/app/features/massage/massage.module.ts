import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassageRoutingModule } from './massage-routing.module';

import { MassagesComponent } from './components/massages/massages.component';

import { ApiService } from '@services/api.service';


@NgModule({
  declarations: [MassagesComponent],
  imports: [
    CommonModule,
    MassageRoutingModule
  ],
  providers: [
    ApiService,
  ]
})
export class MassageModule { }
