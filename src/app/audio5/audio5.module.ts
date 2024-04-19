import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Audio5PageRoutingModule } from './audio5-routing.module';

import { Audio5Page } from './audio5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Audio5PageRoutingModule
  ],
  declarations: [Audio5Page]
})
export class Audio5PageModule {}
