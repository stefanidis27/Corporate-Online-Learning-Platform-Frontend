import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportcreatetraineePageRoutingModule } from './reportcreatetrainee-routing.module';

import { ReportcreatetraineePage } from './reportcreatetrainee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportcreatetraineePageRoutingModule
  ],
  declarations: [ReportcreatetraineePage]
})
export class ReportcreatetraineePageModule {}
