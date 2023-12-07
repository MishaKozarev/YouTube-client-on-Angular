import { createReducer, on } from '@ngrx/store';

import {
  getProfileAction,
  getProfileSuccessfulAction
} from '../actions/profile.actions';
import { initialStateProfile } from '../state.model';

export const profileReducer = createReducer(
  initialStateProfile,
  on(getProfileAction, (state) => ({ ...state, loading: true })),
  on(getProfileSuccessfulAction, (state, { profile }) => ({
    ...state,
    dataUserprofile: profile,
    loading: false
  }))
);
