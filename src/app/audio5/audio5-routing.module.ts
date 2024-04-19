import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Audio5Page } from './audio5.page';

const routes: Routes = [
  {
    path: '',
    component: Audio5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Audio5PageRoutingModule {}
