import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Audio4PageRoutingModule } from './audio4-routing.module';

import { Audio4Page } from './audio4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Audio4PageRoutingModule
  ],
  declarations: [Audio4Page]
})
export class Audio4PageModule {}
