import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Audio3PageRoutingModule } from './audio3-routing.module';

import { Audio3Page } from './audio3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Audio3PageRoutingModule
  ],
  declarations: [Audio3Page]
})
export class Audio3PageModule {}
