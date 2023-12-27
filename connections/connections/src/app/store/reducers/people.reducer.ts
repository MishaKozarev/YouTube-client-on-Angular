import { createReducer, on } from '@ngrx/store';

import {
  getPeopleAction,
  getPeopleFailedAction,
  getPeopleSuccessfulAction,
  updatePeopleAction,
  updatePeopleFailedAction,
  updatePeopleSuccessfulAction
} from '../actions/people.actions';
import { PeopleState } from '../models/people.models';

export const initialStatePeople: PeopleState = {
  people: [],
  loading: false,
  error: null
};

export const peopleReducer = createReducer(
  initialStatePeople,
  on(getPeopleAction, (state): PeopleState => ({ ...state, loading: true })),
  on(
    getPeopleSuccessfulAction,
    (state, action): PeopleState => ({
      ...state,
      people: action.Items,
      loading: false
    })
  ),
  on(
    getPeopleFailedAction,
    (state, { error }): PeopleState => ({
      ...state,
      error,
      loading: false
    })
  ),

  on(updatePeopleAction, (state): PeopleState => ({ ...state, loading: true })),

  on(
    updatePeopleSuccessfulAction,
    (state, action): PeopleState => ({
      ...state,
      people: action.Items,
      loading: false
    })
  ),

  on(
    updatePeopleFailedAction,
    (state, { error }): PeopleState => ({
      ...state,
      error,
      loading: false
    })
  )
);
