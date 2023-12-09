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

export const updatedProfileNameAction = createAction(
  ProfileActionTypes.UPDATE_PROFILE_NAME,
  props<{ name: string }>()
);
export const updateProfileNameActionSuccess = createAction(
  ProfileActionTypes.UPDATE_PROFILE_NAME_SUCCESSFUL,
  props<{ name: string }>()
);
export const updateProfileNameActionFailed = createAction(
  ProfileActionTypes.UPDATE_PROFILE_NAME_FAILED,
  props<{ error: UserProfileError }>()
);

export const logoutProfileAction = createAction(
  ProfileActionTypes.LOGOUT_PROFILE
);
export const logoutProfileActionSuccess = createAction(
  ProfileActionTypes.LOGOUT_PROFILE_SUCCESSFUL
);
export const logoutProfileActionFailed = createAction(
  ProfileActionTypes.LOGOUT_PROFILE_FAILED,
  props<{ error: UserProfileError }>()
);
