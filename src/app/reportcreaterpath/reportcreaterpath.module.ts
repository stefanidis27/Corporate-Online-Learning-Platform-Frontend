import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportcreaterpathPageRoutingModule } from './reportcreaterpath-routing.module';

import { ReportcreaterpathPage } from './reportcreaterpath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportcreaterpathPageRoutingModule
  ],
  declarations: [ReportcreaterpathPage]
})
export class ReportcreaterpathPageModule {}
