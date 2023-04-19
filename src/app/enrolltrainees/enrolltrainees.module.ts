import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrolltraineesPageRoutingModule } from './enrolltrainees-routing.module';

import { EnrolltraineesPage } from './enrolltrainees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrolltraineesPageRoutingModule
  ],
  declarations: [EnrolltraineesPage]
})
export class EnrolltraineesPageModule {}
