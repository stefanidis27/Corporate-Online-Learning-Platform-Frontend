import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseaddassignmentsPageRoutingModule } from './courseaddassignments-routing.module';

import { CourseaddassignmentsPage } from './courseaddassignments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseaddassignmentsPageRoutingModule
  ],
  declarations: [CourseaddassignmentsPage]
})
export class CourseaddassignmentsPageModule {}
