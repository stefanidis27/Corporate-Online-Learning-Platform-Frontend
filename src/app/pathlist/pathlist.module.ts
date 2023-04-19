import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathlistPageRoutingModule } from './pathlist-routing.module';

import { PathlistPage } from './pathlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathlistPageRoutingModule
  ],
  declarations: [PathlistPage]
})
export class PathlistPageModule {}
