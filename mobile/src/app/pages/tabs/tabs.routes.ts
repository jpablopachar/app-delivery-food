import { Routes } from '@angular/router'
import { TabsPage } from './tabs.page'

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      }
    ]
  }
];