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
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password.page').then(
        (page) => page.ForgotPasswordPage
      ),
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
      import('./pages/settings/settings.page').then(
        (page) => page.SettingsPage
      ),
    canActivate: [isAuthenticated],
  },
  {
    path: 'group/:groupId',
    loadComponent: () =>
      import('./pages/group/group.page').then(
        (page) => page.GroupPage
      ),
    canActivate: [isAuthenticated],
  },
  {
    path: 'chats',
    loadComponent: () =>
      import('./pages/home/home.page').then((page) => page.HomePage),
    canActivate: [isAuthenticated],
  },
  {
    path: 'chat/:chatId',
    loadComponent: () =>
      import('./pages/chat/chat.page').then((page) => page.ChatPage),
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
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full',
  },
];
