import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailinfoPageRoutingModule } from './coursedetailinfo-routing.module';

import { CoursedetailinfoPage } from './coursedetailinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailinfoPageRoutingModule
  ],
  declarations: [CoursedetailinfoPage]
})
export class CoursedetailinfoPageModule {}
