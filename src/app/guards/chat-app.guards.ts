import { UserEntity } from '../shared/entity/user/user.entity';

export const isAuthenticated = (user?: UserEntity) => {
  return !!user;
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
