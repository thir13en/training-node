import { NgModule } from '@angular/core';

import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';
import { MaterialFormControlsModule } from '@ui/angular-material/material-form-controls.module';
import { MaterialButtonsIndicatorsModule } from '@ui/angular-material/material-buttons-indicators.module';
import { MassagesRoutingModule } from './massages-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { MassagesComponent } from './components/massages/massages.component';

import { ApiService } from '@services/api.service';
import { MassagesNewComponent } from './components/massages-new/massages-new.component';


@NgModule({
  imports: [
    SharedModule,
    MaterialLayoutModule,
    MaterialFormControlsModule,
    MaterialButtonsIndicatorsModule,
    MassagesRoutingModule,
  ],
  declarations: [
    MassagesComponent,
    MassagesNewComponent,
  ],
  providers: [
    ApiService,
  ]
})
export class MassagesModule { }
