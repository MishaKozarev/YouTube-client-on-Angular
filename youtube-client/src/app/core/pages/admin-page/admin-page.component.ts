import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public dateErrorMessage = '';
  public tagErrorMessage = '';
  public tagsArray: string[] = [];

  public adminForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
    date: FormControl<string | null>;
    tag: FormControl<string | null>;
  }>;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      img: ['', [Validators.required]],
      link: ['', [Validators.required]],
      date: ['', [Validators.required]],
      tag: ['', [Validators.required]]
    });
  }

  public checkDate() {
    this.dateErrorMessage = '';
    const date = this.adminForm.value.date!;
    const dateArray = date?.split('.');
    if (date) {
      if (!/\d./.test(date)) {
        this.dateErrorMessage = 'Date must not contain letters';
      } else if (dateArray.length !== 3) {
        this.dateErrorMessage = 'Enter the date in the specified format';
      } else if (!(new Date(dateArray.reverse().join('-')) < new Date())) {
        this.dateErrorMessage = 'The date is invalid';
      }
    }
  }

  public clearErrorMessage() {
    this.tagErrorMessage = '';
  }

  public addNewTag() {
    if (this.adminForm.value.tag) {
      this.tagErrorMessage = 'You must enter text to add in the field';
    }
  }
}
