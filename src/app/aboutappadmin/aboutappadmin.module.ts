import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutappadminPageRoutingModule } from './aboutappadmin-routing.module';

import { AboutappadminPage } from './aboutappadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutappadminPageRoutingModule
  ],
  declarations: [AboutappadminPage]
})
export class AboutappadminPageModule {}
