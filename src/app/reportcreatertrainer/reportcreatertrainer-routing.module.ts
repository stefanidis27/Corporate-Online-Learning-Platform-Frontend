import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportcreatertrainerPage } from './reportcreatertrainer.page';

const routes: Routes = [
  {
    path: '',
    component: ReportcreatertrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportcreatertrainerPageRoutingModule {}
