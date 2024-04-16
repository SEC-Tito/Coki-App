import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Color7Page } from './color7.page';

const routes: Routes = [
  {
    path: '',
    component: Color7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Color7PageRoutingModule {}
