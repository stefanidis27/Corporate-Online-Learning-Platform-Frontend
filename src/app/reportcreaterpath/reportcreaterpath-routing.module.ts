import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportcreaterpathPage } from './reportcreaterpath.page';

const routes: Routes = [
  {
    path: '',
    component: ReportcreaterpathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportcreaterpathPageRoutingModule {}
