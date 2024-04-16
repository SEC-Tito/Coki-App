import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Color7PageRoutingModule } from './color7-routing.module';

import { Color7Page } from './color7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Color7PageRoutingModule
  ],
  declarations: [Color7Page]
})
export class Color7PageModule {}
