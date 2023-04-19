import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchpathsPageRoutingModule } from './searchpaths-routing.module';

import { SearchpathsPage } from './searchpaths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchpathsPageRoutingModule
  ],
  declarations: [SearchpathsPage]
})
export class SearchpathsPageModule {}
