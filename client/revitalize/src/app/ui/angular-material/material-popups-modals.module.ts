import { NgModule } from '@angular/core';

// material popups and modals modules
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_SNACKBAR_CUSTOM_OPTIONS_PROVIDER } from './snackbar-custom-options-provider';


@NgModule({
  exports: [
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [MAT_SNACKBAR_CUSTOM_OPTIONS_PROVIDER]
})
export class MaterialPopupsModalsModule {}
