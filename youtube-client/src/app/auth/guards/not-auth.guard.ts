import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Injectable({ providedIn: 'root' })
export class NotAuthGuardService {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  navigateToPage() {
    if (!this.loginService.isAuthUser()) {
      return true;
    }
    return this.router.navigate(['/youtube']);
  }
}
export const NotAuthGuard: CanActivateFn = () =>
  inject(NotAuthGuardService).navigateToPage();
