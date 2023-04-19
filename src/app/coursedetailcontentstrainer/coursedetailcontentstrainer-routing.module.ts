import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursedetailcontentstrainerPage } from './coursedetailcontentstrainer.page';

const routes: Routes = [
  {
    path: '',
    component: CoursedetailcontentstrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailcontentstrainerPageRoutingModule {}
