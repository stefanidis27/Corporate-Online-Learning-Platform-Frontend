import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursedetailinfotrainerPage } from './coursedetailinfotrainer.page';

const routes: Routes = [
  {
    path: '',
    component: CoursedetailinfotrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailinfotrainerPageRoutingModule {}
