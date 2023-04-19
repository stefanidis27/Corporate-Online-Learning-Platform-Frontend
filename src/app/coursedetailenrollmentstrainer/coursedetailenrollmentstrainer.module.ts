import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailenrollmentstrainerPageRoutingModule } from './coursedetailenrollmentstrainer-routing.module';

import { CoursedetailenrollmentstrainerPage } from './coursedetailenrollmentstrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailenrollmentstrainerPageRoutingModule
  ],
  declarations: [CoursedetailenrollmentstrainerPage]
})
export class CoursedetailenrollmentstrainerPageModule {}
