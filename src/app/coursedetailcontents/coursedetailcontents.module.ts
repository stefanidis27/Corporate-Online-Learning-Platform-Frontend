import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailcontentsPageRoutingModule } from './coursedetailcontents-routing.module';

import { CoursedetailcontentsPage } from './coursedetailcontents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailcontentsPageRoutingModule
  ],
  declarations: [CoursedetailcontentsPage]
})
export class CoursedetailcontentsPageModule {}
