import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailenrollmentsPageRoutingModule } from './coursedetailenrollments-routing.module';

import { CoursedetailenrollmentsPage } from './coursedetailenrollments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailenrollmentsPageRoutingModule
  ],
  declarations: [CoursedetailenrollmentsPage]
})
export class CoursedetailenrollmentsPageModule {}
