import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathdetailinfotrainerPageRoutingModule } from './pathdetailinfotrainer-routing.module';

import { PathdetailinfotrainerPage } from './pathdetailinfotrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathdetailinfotrainerPageRoutingModule
  ],
  declarations: [PathdetailinfotrainerPage]
})
export class PathdetailinfotrainerPageModule {}
