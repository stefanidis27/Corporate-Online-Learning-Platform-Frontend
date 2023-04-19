import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcoursestrainerPageRoutingModule } from './searchcoursestrainer-routing.module';

import { SearchcoursestrainerPage } from './searchcoursestrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcoursestrainerPageRoutingModule
  ],
  declarations: [SearchcoursestrainerPage]
})
export class SearchcoursestrainerPageModule {}
