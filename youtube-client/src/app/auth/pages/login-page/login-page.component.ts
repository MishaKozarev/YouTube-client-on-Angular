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
import { validationPassword } from '../../validator/password-validator.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl;
  }>;

  public errorMessage = '';
  public loginErrorMessage = 'Please enter a login email';
  public passwordErrorMessage = 'Please enter a password';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, validationPassword]]
    });
  }

  get login() {
    return this.loginForm.get('login') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  public submitForm() {
    if (this.loginForm.status === 'INVALID') {
      if (this.loginForm.value.login === '') {
        this.loginErrorMessage = '';
        this.errorMessage = 'please enter the correct email and password';
      } else if (this.loginForm.value.password === '') {
        this.passwordErrorMessage = '';
        this.errorMessage = 'please enter the correct email and password';
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
}
