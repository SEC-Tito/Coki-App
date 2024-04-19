import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Audio2Page } from './audio2.page';

const routes: Routes = [
  {
    path: '',
    component: Audio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Audio2PageRoutingModule {}
