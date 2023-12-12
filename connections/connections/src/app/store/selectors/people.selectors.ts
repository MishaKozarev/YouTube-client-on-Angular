import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PeopleState } from '../models/people.models';

export const selectPeopleState =
  createFeatureSelector<PeopleState>('peopleState');

export const selectPeople = createSelector(
  selectPeopleState,
  (state) => state.people
);
