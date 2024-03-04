import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then( m => m.OtherPageModule)
  },
  {
    path: 'other2',
    loadChildren: () => import('./other2/other2.module').then( m => m.Other2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
