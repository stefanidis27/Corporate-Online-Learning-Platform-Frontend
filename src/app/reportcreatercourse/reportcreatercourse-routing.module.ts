import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportcreatercoursePage } from './reportcreatercourse.page';

const routes: Routes = [
  {
    path: '',
    component: ReportcreatercoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportcreatercoursePageRoutingModule {}
