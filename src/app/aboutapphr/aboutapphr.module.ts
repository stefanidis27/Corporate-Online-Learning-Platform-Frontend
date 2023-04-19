import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutapphrPageRoutingModule } from './aboutapphr-routing.module';

import { AboutapphrPage } from './aboutapphr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutapphrPageRoutingModule
  ],
  declarations: [AboutapphrPage]
})
export class AboutapphrPageModule {}
