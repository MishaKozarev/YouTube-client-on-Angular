import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import { UserDataSignin, UserResponseSignin } from '../../models/user-data';
import { AuthService } from '../../services/auth/auth.service';
import { validationPassword } from '../../validators/password.validator';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  public errorMessage = 'Please enter a details';
  public isSubmitForm = false;
  public isNotFoundException = false;
  public submitEmailValue = '';
  public submitPasswordValue = '';
  public ngUnsubscribe$ = new Subject<void>();
  public signinForm!: FormGroup<{
    email: FormControl;
    password: FormControl;
  }>;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService,
    private toastMessagesService: ToastMessagesService
  ) {}
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, validationPassword()]]
    });
    this.subscribeToForm();
  }
  get email() {
    return this.signinForm.get('email') as FormControl;
  }

  get password() {
    return this.signinForm.get('password') as FormControl;
  }
  public submitForm() {
    if (this.signinForm.status === 'VALID') {
      this.isSubmitForm = true;
      this.submitEmailValue = this.signinForm.value.email;
      this.submitPasswordValue = this.signinForm.value.password;
      const userData: UserDataSignin = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password
      };
      this.authService
        .sendSigninRequest(userData)
        .pipe(takeUntil(this.ngUnsubscribe$))
        .subscribe({
          next: (data) => this.handleSigninSuccess(data as UserResponseSignin),
          error: (err) => this.handleSigninError(err)
        });
    }
  }

  private handleSigninSuccess(data: UserResponseSignin): void {
    this.isSubmitForm = false;
    this.toastMessagesService.showToastMessage(
      'You have successfully authentication',
      true
    );
    localStorage.setItem('token', data.token);
    localStorage.setItem('uid', data.uid);
    localStorage.setItem('email', this.signinForm.value.email);

    this.routingToMain();
  }

  private handleSigninError(err: HttpErrorResponse): void {
    this.isSubmitForm = false;
    this.isNotFoundException = true;
    this.toastMessagesService.showToastMessage(err.error.message, false);
  }

  private subscribeToForm(): void {
    this.signinForm
      .get('email')
      ?.valueChanges.subscribe((currentEmailValue) => {
        this.isNotFoundException = currentEmailValue === this.submitEmailValue;
      });
    this.signinForm
      .get('password')
      ?.valueChanges.subscribe((currentPasswordValue) => {
        this.isNotFoundException =
          currentPasswordValue === this.submitPasswordValue;
      });
  }

  public routingToSignup() {
    this.route.navigate(['/signup']);
  }
  private routingToMain() {
    this.route.navigate(['/main']);
  }
}
