import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountlistadminPage } from './accountlistadmin.page';

const routes: Routes = [
  {
    path: '',
    component: AccountlistadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountlistadminPageRoutingModule {}
