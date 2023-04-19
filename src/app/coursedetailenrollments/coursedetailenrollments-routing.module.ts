import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursedetailenrollmentsPage } from './coursedetailenrollments.page';

const routes: Routes = [
  {
    path: '',
    component: CoursedetailenrollmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailenrollmentsPageRoutingModule {}
