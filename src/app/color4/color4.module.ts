import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Color4PageRoutingModule } from './color4-routing.module';

import { Color4Page } from './color4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Color4PageRoutingModule
  ],
  declarations: [Color4Page]
})
export class Color4PageModule {}
