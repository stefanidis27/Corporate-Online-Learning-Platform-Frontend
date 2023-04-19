import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchcoursestrainerPage } from './searchcoursestrainer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcoursestrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchcoursestrainerPageRoutingModule {}
