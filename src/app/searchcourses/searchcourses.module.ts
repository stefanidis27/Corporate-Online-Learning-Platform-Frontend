import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcoursesPageRoutingModule } from './searchcourses-routing.module';

import { SearchcoursesPage } from './searchcourses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcoursesPageRoutingModule
  ],
  declarations: [SearchcoursesPage]
})
export class SearchcoursesPageModule {}
