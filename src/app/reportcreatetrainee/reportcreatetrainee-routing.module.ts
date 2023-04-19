import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportcreatetraineePage } from './reportcreatetrainee.page';

const routes: Routes = [
  {
    path: '',
    component: ReportcreatetraineePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportcreatetraineePageRoutingModule {}
