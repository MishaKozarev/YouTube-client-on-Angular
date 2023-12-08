import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getProfileAction,
  updatedProfileNameAction
} from 'src/app/store/actions/profile.actions';
import { selectProfile } from 'src/app/store/selectors/profile.selectors';

import { UserProfile, UserProfileName } from '../../models/profile-data';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public profile$: Observable<UserProfile | null> | undefined;
  public editNameForm!: FormGroup<{ name: FormControl }>;
  public isEditName = false;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.profile$ = this.store.select(selectProfile);
    this.store.dispatch(getProfileAction());
    this.editNameForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

  public get name() {
    return this.editNameForm.get('name') as FormControl;
  }

  public onClickEdit() {
    this.profile$?.subscribe((profile) => {
      if (profile) {
        this.editNameForm?.setValue({
          name: profile.name.S
        });
      }
    });
    this.isEditName = true;
  }

  public onClickCancel() {
    this.isEditName = false;
    this.editNameForm.reset();
  }

  public onFormSubmit() {
    if (this.editNameForm.status === 'VALID') {
      this.isEditName = false;
      const updatedProfileName: UserProfileName = {
        name: this.editNameForm.value.name
      };
      this.store.dispatch(updatedProfileNameAction(updatedProfileName));
      this.isEditName = false;
    }
  }
}
