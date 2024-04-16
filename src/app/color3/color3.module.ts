import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Color3PageRoutingModule } from './color3-routing.module';

import { Color3Page } from './color3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Color3PageRoutingModule
  ],
  declarations: [Color3Page]
})
export class Color3PageModule {}
