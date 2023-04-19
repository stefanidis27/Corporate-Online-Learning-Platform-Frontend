import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchpathsPage } from './searchpaths.page';

const routes: Routes = [
  {
    path: '',
    component: SearchpathsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchpathsPageRoutingModule {}
