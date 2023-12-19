import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getProfileAction,
  logoutProfileAction,
  updatedProfileNameAction
} from 'src/app/store/actions/profile.actions';
import {
  UserProfile,
  UserProfileName
} from 'src/app/store/models/profile.models';
import { selectProfile } from 'src/app/store/selectors/profile.selectors';

import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public profile$: Observable<UserProfile | null> | undefined;
  public profile!: UserProfile;
  public editNameForm!: FormGroup<{ name: FormControl }>;
  public isEditName = false;
  public currentTheme$: Observable<string> = this.themeService.stateTheme$;
  public currentTheme = localStorage.getItem('theme');

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private route: Router,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.initProfile();
    this.editNameForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

  public initProfile(): void {
    this.profile$ = this.store.select(selectProfile);
    this.profile$.subscribe((profile) => {
      if (profile) {
        this.profile = profile;
      }
    });
    if (this.profile.name.S === '') {
      this.store.dispatch(getProfileAction());
    }
    this.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  public get name() {
    return this.editNameForm.get('name') as FormControl;
  }

  public onClickEdit(): void {
    this.isEditName = true;
    this.profile$?.subscribe((profile) => {
      if (profile) {
        this.editNameForm?.setValue({
          name: profile.name.S
        });
      }
    });
  }

  public onClickCancel(): void {
    this.isEditName = false;
    this.editNameForm.reset();
  }

  public onFormSubmit(): void {
    if (this.editNameForm.status === 'VALID') {
      this.isEditName = false;
      const updatedProfileName: UserProfileName = {
        name: this.editNameForm.value.name
      };
      this.store.dispatch(updatedProfileNameAction(updatedProfileName));
    }
  }

  public logout(): void {
    this.store.dispatch(logoutProfileAction());
    // localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    localStorage.removeItem('email');
    localStorage.removeItem('currentMessage');
    this.route.navigate(['/signin']);
  }
}
