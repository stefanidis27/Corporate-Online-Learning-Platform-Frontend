import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportcreatertrainerPageRoutingModule } from './reportcreatertrainer-routing.module';

import { ReportcreatertrainerPage } from './reportcreatertrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportcreatertrainerPageRoutingModule
  ],
  declarations: [ReportcreatertrainerPage]
})
export class ReportcreatertrainerPageModule {}
