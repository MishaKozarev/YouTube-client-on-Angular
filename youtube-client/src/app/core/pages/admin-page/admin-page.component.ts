import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

import { validationDate } from '../../validator/date-validator.validator';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public dateErrorMessage = '';
  public tagErrorMessage = '';
  public errorMessage = '';

  public adminForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
    date: FormControl;
    tags: FormArray;
  }>;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      img: ['', [Validators.required]],
      link: ['', [Validators.required]],
      date: ['', [Validators.required, validationDate]],
      tags: this.fb.array([this.createTag()])
    });
  }

  get tags() {
    return this.adminForm.get('tags') as FormArray;
  }

  addTags() {
    if (this.tags.status === 'VALID' && this.tags.length < 5) {
      this.tags.push(this.createTag());
    }
  }

  createTag(): FormGroup {
    return this.fb.group({
      tag: ['', Validators.required]
    });
  }

  resetForm() {
    this.adminForm.reset();
    this.adminForm.setControl('tags', this.fb.array([this.createTag()]));
  }

  public clearErrorMessage() {
    this.tagErrorMessage = '';
  }

  public onSubmit() {
    if (this.adminForm.invalid) {
      this.errorMessage = 'please fill out the form';
    } else {
      this.loginService.isAuthUser();
      this.loginService.login();
      this.router.navigate(['/youtube']);
    }
  }
}
