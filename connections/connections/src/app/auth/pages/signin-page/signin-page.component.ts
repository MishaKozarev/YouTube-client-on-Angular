import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit{
  public errorMessage = 'Please enter a details';
  public signinForm!: FormGroup<{
    email: FormControl;
    password: FormControl;
  }>;
  constructor(private fb: FormBuilder, private route: Router) {}
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get email() {
    return this.signinForm.get('email') as FormControl;
  }

  get password() {
    return this.signinForm.get('password') as FormControl;
  }
  public submitForm() {
    if (this.signinForm.status === 'VALID') {
      this.route.navigate(['/main']);
    }
  }
  public routingToSignup() {
    this.route.navigate(['/signup']);
  }
}
