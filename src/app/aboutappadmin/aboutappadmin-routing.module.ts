import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutappadminPage } from './aboutappadmin.page';

const routes: Routes = [
  {
    path: '',
    component: AboutappadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutappadminPageRoutingModule {}
