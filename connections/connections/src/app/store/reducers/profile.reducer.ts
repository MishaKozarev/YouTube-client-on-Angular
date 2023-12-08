import { createReducer, on } from '@ngrx/store';

import {
  getProfileAction,
  getProfileSuccessfulAction,
  updateProfileNameActionSuccess
} from '../actions/profile.actions';
import { initialStateProfile, ProfileState } from '../state.model';

export const profileReducer = createReducer(
  initialStateProfile,
  on(getProfileAction, (state): ProfileState => ({ ...state, loading: true })),
  on(
    getProfileSuccessfulAction,
    (state, { profile }): ProfileState => ({
      ...state,
      dataUserprofile: profile,
      loading: false
    })
  ),

  on(
    updateProfileNameActionSuccess,
    (state, { name }): ProfileState => ({
      ...state,
      dataUserprofile: state.dataUserprofile
        ? { ...state.dataUserprofile, name: { S: name } }
        : null,
      loading: false,
      error: null
    })
  )
);
