import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Color4Page } from './color4.page';

const routes: Routes = [
  {
    path: '',
    component: Color4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Color4PageRoutingModule {}
