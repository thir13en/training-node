import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';


const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('../features/massages/massages.module').then(m => m.MassagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
