import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassagesComponent } from './components/massages/massages.component';
import { MassagesNewComponent } from './components/massages-new/massages-new.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'massages' },
  { path: 'massages', children: [
      { path: '', pathMatch: 'full', component: MassagesComponent },
      { path: 'new', component: MassagesNewComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassagesRoutingModule {}
