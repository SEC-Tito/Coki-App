import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Color5PageRoutingModule } from './color5-routing.module';

import { Color5Page } from './color5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Color5PageRoutingModule
  ],
  declarations: [Color5Page]
})
export class Color5PageModule {}
