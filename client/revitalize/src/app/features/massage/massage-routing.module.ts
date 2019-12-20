import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassagesComponent } from './components/massages/massages.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'massages' },
  { path: 'massages', pathMatch: 'full', component: MassagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassageRoutingModule {}
