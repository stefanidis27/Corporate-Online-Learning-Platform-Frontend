import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountlistPageRoutingModule } from './accountlist-routing.module';

import { AccountlistPage } from './accountlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountlistPageRoutingModule
  ],
  declarations: [AccountlistPage]
})
export class AccountlistPageModule {}
