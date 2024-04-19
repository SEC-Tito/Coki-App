import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Audio4Page } from './audio4.page';

const routes: Routes = [
  {
    path: '',
    component: Audio4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Audio4PageRoutingModule {}
