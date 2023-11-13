import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  public submitForm(login: string, password: string) {
    if (!login || !password) {
      this.errorMessage = 'fields must be completed';
    } else {
      this.loginService.login();
      this.router.navigate(['/youtube']);
    }
  }

  public clearErrorMessage = () => {
    this.errorMessage = '';
  };
}
