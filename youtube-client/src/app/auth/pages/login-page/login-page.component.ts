/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  public errorMessage = '';
  public loginErrorMessage = 'Please enter a login email';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public submitForm() {
    if (this.loginForm.status === 'INVALID') {
      if (this.loginForm.value.login === '') {
        this.loginErrorMessage = '';
        this.errorMessage = 'Please enter a login email';
      } else if (this.loginForm.value.password === '') {
        this.errorMessage = 'Please enter a password';
      }
    } else {
      this.loginService.isAuthUser();
      this.loginService.login();
      this.router.navigate(['/youtube']);
    }
  }

  public clearErrorMessage() {
    this.errorMessage = '';
  }

  public checkPasswordValidation() {
    this.errorMessage = '';
    if (this.loginForm.value.password!.length < 8) {
      this.errorMessage =
        "Your password isn't strong enough: must be at least 8 characters long";
    } else if (!this.loginForm.value.password!.match(/[A-Z]/)) {
      this.errorMessage =
        "Your password isn't strong enough: must contain at least one capital letter";
    } else if (!this.loginForm.value.password!.match(/[a-z]/)) {
      this.errorMessage =
        "Your password isn't strong enough: must contain at least one capital letter";
    } else if (!this.loginForm.value.password!.match(/\d/)) {
      this.errorMessage =
        "Your password isn't strong enough: must contain at least one number";
    } else if (
      !this.loginForm.value.password!.match(/[[!@#$&*"'./|/\\+^`~_=]/)
    ) {
      this.errorMessage =
        "Your password isn't strong enough: must contain at least one special character";
    }
  }
}
