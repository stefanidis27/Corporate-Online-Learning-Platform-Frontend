import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporttypePageRoutingModule } from './reporttype-routing.module';

import { ReporttypePage } from './reporttype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporttypePageRoutingModule
  ],
  declarations: [ReporttypePage]
})
export class ReporttypePageModule {}
