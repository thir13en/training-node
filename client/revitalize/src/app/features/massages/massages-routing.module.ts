import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTE_FRAGMENTS } from '@routes/routes';
import { MassagesComponent } from './components/massages/massages.component';
import { MassagesNewComponent } from './components/massages-new/massages-new.component';
import { MassagesEditComponent } from './components/massages-edit/massages-edit.component';
import { MassagesDetailComponent } from './components/massages-detail/massages-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ROUTE_FRAGMENTS.MASSAGES },
  { path: ROUTE_FRAGMENTS.MASSAGES, children: [
      { path: '', pathMatch: 'full', component: MassagesComponent },
      { path: ROUTE_FRAGMENTS.NEW, component: MassagesNewComponent },
      {
        path: ROUTE_FRAGMENTS.MASSAGE_IDENTIFIER,
        children: [
          { path: '', pathMatch: 'full', component: MassagesDetailComponent },
          { path: ROUTE_FRAGMENTS.EDIT, component: MassagesEditComponent }
        ]
      }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassagesRoutingModule {}
