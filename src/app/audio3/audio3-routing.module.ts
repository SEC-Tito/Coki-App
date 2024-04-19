import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Audio3Page } from './audio3.page';

const routes: Routes = [
  {
    path: '',
    component: Audio3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Audio3PageRoutingModule {}
