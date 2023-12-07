import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserDataSignup } from 'src/app/auth/models/user-data';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import { validationPassword } from '../../validators/password.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit, OnDestroy {
  public errorMessage = 'Please enter a details';
  public messageEmail = '';
  public isSubmitForm = false;
  public isPrimaryDuplicationError = false;
  public submitEmailValue = '';
  public arrayEmailValues: string[] = [];
  public ngUnsubscribe$ = new Subject<void>();
  public signupForm!: FormGroup<{
    email: FormControl;
    name: FormControl;
    password: FormControl;
  }>;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService,
    private toastMessagesService: ToastMessagesService
  ) {}

  public ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(40)]],
      password: ['', [Validators.required, validationPassword()]]
    });
    this.subscribeToEmailForm();
  }

  get email(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get name(): FormControl {
    return this.signupForm.get('name') as FormControl;
  }

  get password(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  public submitForm(): void {
    if (this.signupForm.status === 'VALID') {
      this.isSubmitForm = true;
      this.submitEmailValue = this.signupForm.value.email;
      const userData: UserDataSignup = {
        email: this.signupForm.value.email,
        name: this.signupForm.value.name,
        password: this.signupForm.value.password
      };
      this.authService
        .sendSignupRequest(userData)
        .pipe(takeUntil(this.ngUnsubscribe$))
        .subscribe({
          next: () => this.handleSignupSuccess(),
          error: (err) => this.handleSignupError(err)
        });
    }
  }
  private handleSignupSuccess(): void {
    this.isSubmitForm = false;
    this.toastMessagesService.showToastMessage(
      'You have successfully registered',
      true
    );
    this.routingToSignin();
  }

  private handleSignupError(err: HttpErrorResponse): void {
    this.isSubmitForm = false;
    this.isPrimaryDuplicationError = true;
    this.arrayEmailValues.push(this.submitEmailValue);
    this.messageEmail = 'user with this email already exists';
    this.toastMessagesService.showToastMessage(err.error.message, false);
  }

  public routingToSignin(): void {
    this.route.navigate(['/signin']);
  }

  private subscribeToEmailForm(): void {
    this.signupForm
      .get('email')
      ?.valueChanges.subscribe((currentEmailValue) => {
        this.isPrimaryDuplicationError =
          this.arrayEmailValues.includes(currentEmailValue);
        this.messageEmail = '';
        if (this.isPrimaryDuplicationError) {
          this.messageEmail = 'user with this email already exists';
        }
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
