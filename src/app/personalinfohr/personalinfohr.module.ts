import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalinfohrPageRoutingModule } from './personalinfohr-routing.module';

import { PersonalinfohrPage } from './personalinfohr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalinfohrPageRoutingModule
  ],
  declarations: [PersonalinfohrPage]
})
export class PersonalinfohrPageModule {}
