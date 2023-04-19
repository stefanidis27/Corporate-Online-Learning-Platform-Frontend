import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchcourseshrPage } from './searchcourseshr.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcourseshrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchcourseshrPageRoutingModule {}
