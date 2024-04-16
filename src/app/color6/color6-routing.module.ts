import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Color6Page } from './color6.page';

const routes: Routes = [
  {
    path: '',
    component: Color6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Color6PageRoutingModule {}
