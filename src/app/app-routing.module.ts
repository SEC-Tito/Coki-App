import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'color',
    loadChildren: () => import('./color/color.module').then( m => m.ColorPageModule)
  },
  {
    path: 'animales',
    loadChildren: () => import('./page/animales/animales.module').then( m => m.AnimalesPageModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)
  },
  {
    path: 'color2',
    loadChildren: () => import('./app/color2/color2.module').then( m => m.Color2PageModule)
  },
  {
    path: 'color2',
    loadChildren: () => import('./color2/color2.module').then( m => m.Color2PageModule)
  },
  {
    path: 'color3',
    loadChildren: () => import('./color3/color3.module').then( m => m.Color3PageModule)
  },
  {
    path: 'color4',
    loadChildren: () => import('./color4/color4.module').then( m => m.Color4PageModule)
  },
  {
    path: 'color5',
    loadChildren: () => import('./color5/color5.module').then( m => m.Color5PageModule)
  },
  {
    path: 'color6',
    loadChildren: () => import('./color6/color6.module').then( m => m.Color6PageModule)
  },
  {
    path: 'color7',
    loadChildren: () => import('./color7/color7.module').then( m => m.Color7PageModule)
  },
  {
    path: 'audio2',
    loadChildren: () => import('./audio2/audio2.module').then( m => m.Audio2PageModule)
  },
  {
    path: 'audio3',
    loadChildren: () => import('./audio3/audio3.module').then( m => m.Audio3PageModule)
  },
  {
    path: 'audio4',
    loadChildren: () => import('./audio4/audio4.module').then( m => m.Audio4PageModule)
  },
  {
    path: 'audio5',
    loadChildren: () => import('./audio5/audio5.module').then( m => m.Audio5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
