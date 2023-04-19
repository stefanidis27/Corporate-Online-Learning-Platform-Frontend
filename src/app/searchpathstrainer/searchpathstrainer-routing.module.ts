import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchpathstrainerPage } from './searchpathstrainer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchpathstrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchpathstrainerPageRoutingModule {}
