import { Routes } from '@angular/router';
import { isLoggedInGuard } from './shared/guard/is-logged-in.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((page) => page.HomePage),
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'components',
    loadComponent: () =>
      import('./pages/components/components.page').then(
        (page) => page.ComponentPage
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((page) => page.LoginPage),
  },
  {
    path: '**',
    redirectTo: 'components',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
];
