import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Color2PageRoutingModule } from './color2-routing.module';

import { Color2Page } from './color2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Color2PageRoutingModule
  ],
  declarations: [Color2Page]
})
export class Color2PageModule {}
