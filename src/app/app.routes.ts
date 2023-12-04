import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
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
    loadChildren: () => import('./pages/config/config.routes').then(m => m.CONFIG_ROUTES)
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
