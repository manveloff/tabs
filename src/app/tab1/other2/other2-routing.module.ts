import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Other2Page } from './other2.page';

const routes: Routes = [
  {
    path: '',
    component: Other2Page
  },
  {
    path: 'other3',
    loadChildren: () => import('./other3/other3.module').then( m => m.Other3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Other2PageRoutingModule {}
