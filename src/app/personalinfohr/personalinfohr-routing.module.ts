import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalinfohrPage } from './personalinfohr.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalinfohrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalinfohrPageRoutingModule {}
