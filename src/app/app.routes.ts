import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'produits',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'qui-sommes-nous',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'bb-tanks',
    loadComponent: () => import('./pages/bb-tanks/bb-tanks.component').then(m => m.BbTanksComponent)
  },
  {
    path: 'bombonnes-700',
    loadComponent: () => import('./pages/bombonnes-700/bombonnes-700.component').then(m => m.Bombonnes700Component)
  },
  {
    path: 'ultra-tanks',
    loadComponent: () => import('./pages/ultra-tanks/ultra-tanks.component').then(m => m.UltraTanksComponent)
  }
];