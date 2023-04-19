import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseaddassignmentsPage } from './courseaddassignments.page';

const routes: Routes = [
  {
    path: '',
    component: CourseaddassignmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseaddassignmentsPageRoutingModule {}
