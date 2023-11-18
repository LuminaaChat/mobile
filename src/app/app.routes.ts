import { Routes } from '@angular/router';

import { isAuthenticated } from './guards/chat-app.guards';

export const routes: Routes = [
  {
    path: 'start',
    loadComponent: () =>
      import('./pages/start/start.page').then((page) => page.StartPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((page) => page.LoginPage),
  },
  {
    path: 'set-pin',
    loadComponent: () =>
      import('./pages/set-pin/set-pin.page').then((page) => page.SetPinPage),
  },
  {
    path: 'pin-input',
    loadComponent: () =>
      import('./pages/pin-input/pin-input.page').then(
        (page) => page.PinInputComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((page) => page.HomePage),
    canActivate: [isAuthenticated],
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/home/home.page').then((page) => page.HomePage),
    canActivate: [isAuthenticated],
  },
  {
    path: 'chats',
    loadComponent: () =>
      import('./pages/home/home.page').then((page) => page.HomePage),
    canActivate: [isAuthenticated],
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./pages/home/home.page').then((page) => page.HomePage),
    canActivate: [isAuthenticated],
  },
  {
    path: 'components',
    loadComponent: () =>
      import('./pages/components/components.page').then(
        (page) => page.ComponentPage
      ),
  },

  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'components',
    pathMatch: 'full',
  },
];
