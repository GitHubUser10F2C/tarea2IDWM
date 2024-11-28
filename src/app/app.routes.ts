import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    loadComponent: () => import('./characters/pages/list/list.component').then(m => m.ListComponent)
  }
];
