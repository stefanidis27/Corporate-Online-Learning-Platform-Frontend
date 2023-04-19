import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportcreatercoursePageRoutingModule } from './reportcreatercourse-routing.module';

import { ReportcreatercoursePage } from './reportcreatercourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportcreatercoursePageRoutingModule
  ],
  declarations: [ReportcreatercoursePage]
})
export class ReportcreatercoursePageModule {}
