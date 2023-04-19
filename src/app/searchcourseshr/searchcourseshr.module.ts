import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcourseshrPageRoutingModule } from './searchcourseshr-routing.module';

import { SearchcourseshrPage } from './searchcourseshr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcourseshrPageRoutingModule
  ],
  declarations: [SearchcourseshrPage]
})
export class SearchcourseshrPageModule {}
