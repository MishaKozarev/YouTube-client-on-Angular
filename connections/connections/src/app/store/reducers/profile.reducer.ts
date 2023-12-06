import { createReducer, on } from '@ngrx/store';

import { getProfile, getProfileSuccess } from '../actions/profile.actions';
import { initialProfileState } from '../state.model';

export const profileReducer = createReducer(
  initialProfileState,
  on(getProfile, (state) => ({
    ...state
  })),
  on(getProfileSuccess, (state, { profile }) => ({
    ...state,
    data: profile
  }))
);
