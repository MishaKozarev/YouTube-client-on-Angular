import { createAction, props } from '@ngrx/store';
import {
  UserProfile,
  UserProfileError
} from 'src/app/core/models/profile-data';

import { ProfileActionTypes } from '../action-type/profile-action-type';

export const getProfileAction = createAction(ProfileActionTypes.GET_PROFILE);

export const getProfileSuccessfulAction = createAction(
  ProfileActionTypes.GET_PROFILE_SUCCESSFUL,
  props<{ profile: UserProfile }>()
);

export const getProfileFailedAction = createAction(
  ProfileActionTypes.GET_PROFILE_FAILED,
  props<{ error: UserProfileError }>()
);
