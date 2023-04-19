import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailcontentstrainerPageRoutingModule } from './coursedetailcontentstrainer-routing.module';

import { CoursedetailcontentstrainerPage } from './coursedetailcontentstrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailcontentstrainerPageRoutingModule
  ],
  declarations: [CoursedetailcontentstrainerPage]
})
export class CoursedetailcontentstrainerPageModule {}
