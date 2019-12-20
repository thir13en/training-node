import { NgModule } from '@angular/core';

import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';
import { MaterialButtonsIndicatorsModule } from '@ui/angular-material/material-buttons-indicators.module';
import { MassagesRoutingModule } from './massages-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { MassagesComponent } from './components/massages/massages.component';

import { ApiService } from '@services/api.service';


@NgModule({
  declarations: [MassagesComponent],
  imports: [
    SharedModule,
    MaterialLayoutModule,
    MaterialButtonsIndicatorsModule,
    MassagesRoutingModule,
  ],
  providers: [
    ApiService,
  ]
})
export class MassagesModule { }
