import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathdetailinfoPageRoutingModule } from './pathdetailinfo-routing.module';

import { PathdetailinfoPage } from './pathdetailinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathdetailinfoPageRoutingModule
  ],
  declarations: [PathdetailinfoPage]
})
export class PathdetailinfoPageModule {}
