import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/auth/services/login.service';
import { createCustomCard } from 'src/app/store/actions/customCards.actions';
import { Item } from 'src/app/youtube/models/search-item.model';

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
    title: FormControl;
    description: FormControl;
    img: FormControl;
    link: FormControl;
    date: FormControl;
    tags: FormArray;
  }>;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private store: Store
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

  get title() {
    return this.adminForm.get('title') as FormControl;
  }

  get description() {
    return this.adminForm.get('description') as FormControl;
  }

  get img() {
    return this.adminForm.get('img') as FormControl;
  }

  get link() {
    return this.adminForm.get('link') as FormControl;
  }

  get date() {
    return this.adminForm.get('date') as FormControl;
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
      const customCards: Item = this.createCustomCard();
      this.store.dispatch(createCustomCard({ customCards }));
      this.loginService.isAuthUser();
      this.loginService.login();
      this.router.navigate(['/youtube']);
    }
  }

  public createCustomCard() {
    return {
      kind: '',
      etag: '',
      id: { kind: '', videoId: '' },
      snippet: {
        publishedAt: this.adminForm.value.date,
        channelId: '',
        title: this.adminForm.value.title,
        description: this.adminForm.value.description,
        thumbnails: {
          default: {
            url: this.adminForm.value.link,
            width: 120,
            height: 90
          },
          medium: {
            url: this.adminForm.value.link,
            width: 320,
            height: 180
          },
          high: {
            url: this.adminForm.value.link,
            width: 480,
            height: 360
          },
          standard: {
            url: this.adminForm.value.link,
            width: 640,
            height: 480
          },
          maxres: {
            url: this.adminForm.value.link,
            width: 1280,
            height: 720
          }
        },
        channelTitle: '',
        tags: [],
        categoryId: '',
        liveBroadcastContent: '',
        defaultLanguage: '',
        localized: {
          title: '',
          description: ''
        },
        defaultAudioLanguage: ''
      },
      statistics: {
        viewCount: '',
        likeCount: '',
        dislikeCount: '',
        favoriteCount: '',
        commentCount: ''
      }
    };
  }
}
