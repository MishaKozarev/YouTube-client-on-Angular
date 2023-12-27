import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PeopleMessageState } from '../reducers/people-message.reducers';

export const selectPeopleMessageState =
  createFeatureSelector<PeopleMessageState>('peopleMessageState');

export const selectPeopleMessage = createSelector(
  selectPeopleMessageState,
  (state) => state.message
);
