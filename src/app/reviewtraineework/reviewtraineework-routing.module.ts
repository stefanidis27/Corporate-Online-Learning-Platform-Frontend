import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewtraineeworkPage } from './reviewtraineework.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewtraineeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewtraineeworkPageRoutingModule {}
