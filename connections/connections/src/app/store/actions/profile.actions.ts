import { createAction, props } from '@ngrx/store';
import { ProfileData } from 'src/app/core/models/profile-data';

import { ProfileActionTypes } from '../action-type/profile-action-type';

export const getProfile = createAction(ProfileActionTypes.GET_PROFILE);

export const getProfileSuccess = createAction(
  ProfileActionTypes.GET_PROFILE_SUCCESS,
  props<{ profile: ProfileData }>()
);
