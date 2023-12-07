import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProfileState } from '../state.model';

export const selectProfileState =
  createFeatureSelector<ProfileState>('profileState');

export const selectProfile = createSelector(
  selectProfileState,
  (state) => state.dataUserprofile
);
