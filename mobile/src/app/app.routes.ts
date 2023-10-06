import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.routes').then((r): Routes => r.tabsRoutes),
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
