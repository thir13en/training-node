// angular
import { NgModule } from '@angular/core';

// material buttons and indicators stuff
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
  ]
})
export class MaterialButtonsIndicatorsModule {}
