import { NgModule } from '@angular/core';

import { MaterialLayoutModule } from '@ui/angular-material/material-layout.module';
import { MaterialFormControlsModule } from '@ui/angular-material/material-form-controls.module';
import { MaterialButtonsIndicatorsModule } from '@ui/angular-material/material-buttons-indicators.module';
import { MassagesRoutingModule } from './massages-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { MassagesComponent } from './components/massages/massages.component';

import { ApiService } from '@services/api.service';
import { MassagesComposerComponent } from './components/massages-composer/massages-composer.component';
import { MassagesEditComponent } from './components/massages-edit/massages-edit.component';
import { MassagesDetailComponent } from './components/massages-detail/massages-detail.component';


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
    MassagesComposerComponent,
    MassagesEditComponent,
    MassagesDetailComponent,
  ],
  providers: [
    ApiService,
  ]
})
export class MassagesModule { }
