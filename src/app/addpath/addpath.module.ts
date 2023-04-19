import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpathPageRoutingModule } from './addpath-routing.module';

import { AddpathPage } from './addpath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpathPageRoutingModule
  ],
  declarations: [AddpathPage]
})
export class AddpathPageModule {}
