import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutapptrainerPageRoutingModule } from './aboutapptrainer-routing.module';

import { AboutapptrainerPage } from './aboutapptrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutapptrainerPageRoutingModule
  ],
  declarations: [AboutapptrainerPage]
})
export class AboutapptrainerPageModule {}
