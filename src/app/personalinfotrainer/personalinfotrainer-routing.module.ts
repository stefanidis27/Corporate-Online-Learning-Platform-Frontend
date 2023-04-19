import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalinfotrainerPage } from './personalinfotrainer.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalinfotrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalinfotrainerPageRoutingModule {}
