import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathdetailinfotrainerPage } from './pathdetailinfotrainer.page';

const routes: Routes = [
  {
    path: '',
    component: PathdetailinfotrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathdetailinfotrainerPageRoutingModule {}
