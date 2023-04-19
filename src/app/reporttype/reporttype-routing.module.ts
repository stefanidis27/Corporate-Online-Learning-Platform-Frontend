import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporttypePage } from './reporttype.page';

const routes: Routes = [
  {
    path: '',
    component: ReporttypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporttypePageRoutingModule {}
