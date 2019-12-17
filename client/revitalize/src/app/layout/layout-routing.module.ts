import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('../features/massage/massage.module').then(m => m.MassageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
