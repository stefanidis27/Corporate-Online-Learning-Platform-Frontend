import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrolltraineesPage } from './enrolltrainees.page';

const routes: Routes = [
  {
    path: '',
    component: EnrolltraineesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrolltraineesPageRoutingModule {}
