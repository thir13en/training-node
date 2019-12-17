import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassageRoutingModule } from './massage-routing.module';
import { MassagesComponent } from './components/massages/massages.component';


@NgModule({
  declarations: [MassagesComponent],
  imports: [
    CommonModule,
    MassageRoutingModule
  ]
})
export class MassageModule { }
