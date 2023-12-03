import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'password-forgot',
    loadComponent: () => import('./pages/password-forgot/password-forgot.page').then(m => m.PasswordForgotPage)
  },
  {
    path: 'config',
    loadComponent: () => import('./pages/config/config.page').then(m => m.ConfigPage)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.routes').then(m => m.CLIENTS_ROUTES)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.routes').then(m => m.EMPLOYEES_ROUTES)
  },
];
