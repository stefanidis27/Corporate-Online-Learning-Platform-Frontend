import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathdetailinfoPage } from './pathdetailinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PathdetailinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathdetailinfoPageRoutingModule {}
