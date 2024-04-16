import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Color3Page } from './color3.page';

const routes: Routes = [
  {
    path: '',
    component: Color3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Color3PageRoutingModule {}
