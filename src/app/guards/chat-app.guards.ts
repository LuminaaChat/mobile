import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { UserEntity } from '../shared/entity/user/user.entity';

export const isAuthenticated = (user?: UserEntity) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    router.navigate(['/start'], { replaceUrl: true });
    return false;
  } else {
    return true;
  }
};
export const isAuthorizedEmplopyee = (user?: UserEntity) => {
  return !!user;
};
export const isAuthorizedFamilyMember = (user?: UserEntity) => {
  return !!user;
};
export const isAuthorizedParent = (user?: UserEntity) => {
  return !!user;
};
export const isAuthorizedChild = (user?: UserEntity) => {
  return !!user;
};
