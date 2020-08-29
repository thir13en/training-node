import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';


const MAT_SNACKBAR_CUSTOM_OPTIONS: MatSnackBarConfig = {
  duration: 3333,
};
export const MAT_SNACKBAR_CUSTOM_OPTIONS_PROVIDER = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACKBAR_CUSTOM_OPTIONS
};
