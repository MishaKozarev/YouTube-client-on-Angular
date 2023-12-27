import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  constructor(private router: Router) {}

  navigateToPage() {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('uid') &&
      localStorage.getItem('email')
    ) {
      return true;
    }
    return this.router.navigate(['/signin']);
  }
}
export const AuthGuard: CanActivateFn = () =>
  inject(AuthGuardService).navigateToPage();
