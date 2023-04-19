import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpathPage } from './addpath.page';

const routes: Routes = [
  {
    path: '',
    component: AddpathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpathPageRoutingModule {}
