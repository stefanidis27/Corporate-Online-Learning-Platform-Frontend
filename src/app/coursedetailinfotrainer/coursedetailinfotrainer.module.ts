import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailinfotrainerPageRoutingModule } from './coursedetailinfotrainer-routing.module';

import { CoursedetailinfotrainerPage } from './coursedetailinfotrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailinfotrainerPageRoutingModule
  ],
  declarations: [CoursedetailinfotrainerPage]
})
export class CoursedetailinfotrainerPageModule {}
