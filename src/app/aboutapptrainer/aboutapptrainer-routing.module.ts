import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutapptrainerPage } from './aboutapptrainer.page';

const routes: Routes = [
  {
    path: '',
    component: AboutapptrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutapptrainerPageRoutingModule {}
