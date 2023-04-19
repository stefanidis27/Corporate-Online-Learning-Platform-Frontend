import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalinfotrainerPageRoutingModule } from './personalinfotrainer-routing.module';

import { PersonalinfotrainerPage } from './personalinfotrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalinfotrainerPageRoutingModule
  ],
  declarations: [PersonalinfotrainerPage]
})
export class PersonalinfotrainerPageModule {}
