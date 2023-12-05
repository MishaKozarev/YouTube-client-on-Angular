import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataSignup } from 'src/app/connect/models/user-data';
import { HttpService } from 'src/app/auth/services/http/http.service';

import { validationPassword } from '../../validators/password.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  public errorMessage = 'Please enter a details';
  public errorMessageSignup = '';
  public signupForm!: FormGroup<{
    email: FormControl;
    name: FormControl;
    password: FormControl;
  }>;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, validationPassword()]]
    });
  }

  get email() {
    return this.signupForm.get('email') as FormControl;
  }

  get name() {
    return this.signupForm.get('name') as FormControl;
  }

  get password() {
    return this.signupForm.get('password') as FormControl;
  }

  public submitForm() {
    if (this.signupForm.status === 'VALID') {
      const userData: UserDataSignup = {
        email: this.signupForm.value.email,
        name: this.signupForm.value.name,
        password: this.signupForm.value.password,
      }
      this.httpService.registration(userData)
      .subscribe(
        {
          error: (err) => this.errorMessageSignup = `Registration failed: ${err}`
        }
      );
      // this.route.navigate(['/signin']);
    }
  }

  public routingToSignin() {
    this.route.navigate(['/signin']);
  }
}
