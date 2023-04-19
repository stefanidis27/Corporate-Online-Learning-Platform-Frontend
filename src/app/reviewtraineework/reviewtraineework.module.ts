import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewtraineeworkPageRoutingModule } from './reviewtraineework-routing.module';

import { ReviewtraineeworkPage } from './reviewtraineework.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewtraineeworkPageRoutingModule
  ],
  declarations: [ReviewtraineeworkPage]
})
export class ReviewtraineeworkPageModule {}
