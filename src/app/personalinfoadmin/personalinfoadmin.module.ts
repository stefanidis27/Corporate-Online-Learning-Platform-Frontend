import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalinfoadminPageRoutingModule } from './personalinfoadmin-routing.module';

import { PersonalinfoadminPage } from './personalinfoadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalinfoadminPageRoutingModule
  ],
  declarations: [PersonalinfoadminPage]
})
export class PersonalinfoadminPageModule {}
