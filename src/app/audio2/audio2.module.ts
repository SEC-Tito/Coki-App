import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Audio2PageRoutingModule } from './audio2-routing.module';

import { Audio2Page } from './audio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Audio2PageRoutingModule
  ],
  declarations: [Audio2Page]
})
export class Audio2PageModule {}
