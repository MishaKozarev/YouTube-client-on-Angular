import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  if (localStorage.getItem('authToken')) return true;
  return false;
};
