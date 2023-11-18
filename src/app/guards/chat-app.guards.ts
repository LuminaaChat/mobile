import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../chatapi';
import { AuthService } from '../services/auth/auth.service';

export const isAuthenticated = (user?: User) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    router.navigate(['/start'], { replaceUrl: true });
    return false;
  } else {
    return true;
  }
};
export const isAuthorizedEmplopyee = (user?: User) => {
  return !!user;
};
export const isAuthorizedFamilyMember = (user?: User) => {
  return !!user;
};
export const isAuthorizedParent = (user?: User) => {
  return !!user;
};
export const isAuthorizedChild = (user?: User) => {
  return !!user;
};
