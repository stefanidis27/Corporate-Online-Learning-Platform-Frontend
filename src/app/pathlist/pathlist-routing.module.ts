import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathlistPage } from './pathlist.page';

const routes: Routes = [
  {
    path: '',
    component: PathlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathlistPageRoutingModule {}
