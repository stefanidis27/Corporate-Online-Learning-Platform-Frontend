import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalinfoadminPage } from './personalinfoadmin.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalinfoadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalinfoadminPageRoutingModule {}
