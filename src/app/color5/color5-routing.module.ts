import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Color5Page } from './color5.page';

const routes: Routes = [
  {
    path: '',
    component: Color5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Color5PageRoutingModule {}
