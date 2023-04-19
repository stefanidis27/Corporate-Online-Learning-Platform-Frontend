import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchpathstrainerPageRoutingModule } from './searchpathstrainer-routing.module';

import { SearchpathstrainerPage } from './searchpathstrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchpathstrainerPageRoutingModule
  ],
  declarations: [SearchpathstrainerPage]
})
export class SearchpathstrainerPageModule {}
