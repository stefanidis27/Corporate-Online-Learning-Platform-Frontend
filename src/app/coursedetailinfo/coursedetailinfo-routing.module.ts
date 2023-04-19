import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursedetailinfoPage } from './coursedetailinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CoursedetailinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailinfoPageRoutingModule {}
