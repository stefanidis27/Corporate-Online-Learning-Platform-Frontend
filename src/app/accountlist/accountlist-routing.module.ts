import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountlistPage } from './accountlist.page';

const routes: Routes = [
  {
    path: '',
    component: AccountlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountlistPageRoutingModule {}
