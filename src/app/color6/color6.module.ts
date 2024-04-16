import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Color6PageRoutingModule } from './color6-routing.module';

import { Color6Page } from './color6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Color6PageRoutingModule
  ],
  declarations: [Color6Page]
})
export class Color6PageModule {}
