import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutapphrPage } from './aboutapphr.page';

const routes: Routes = [
  {
    path: '',
    component: AboutapphrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutapphrPageRoutingModule {}
