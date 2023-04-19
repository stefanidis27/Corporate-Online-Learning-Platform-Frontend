import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursedetailcontentsPage } from './coursedetailcontents.page';

const routes: Routes = [
  {
    path: '',
    component: CoursedetailcontentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailcontentsPageRoutingModule {}
