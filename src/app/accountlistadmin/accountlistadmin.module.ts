import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountlistadminPageRoutingModule } from './accountlistadmin-routing.module';

import { AccountlistadminPage } from './accountlistadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountlistadminPageRoutingModule
  ],
  declarations: [AccountlistadminPage]
})
export class AccountlistadminPageModule {}
