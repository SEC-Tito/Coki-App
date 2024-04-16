import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Color2Page } from './color2.page';

const routes: Routes = [
  {
    path: '',
    component: Color2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Color2PageRoutingModule {}
