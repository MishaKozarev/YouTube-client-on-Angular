import { createReducer, on } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import {
  getPeopleMessageAction,
  getPeopleMessageFailedAction,
  getPeopleMessageSuccessfulAction,
  sendPeopleMessageAction,
  sendPeopleMessageFailedAction,
  sendPeopleMessageSuccessfulAction,
  updatePeopleMessageAction,
  updatePeopleMessageFailedAction,
  updatePeopleMessageSuccessfulAction
} from '../actions/people-message.actions';
import { PeopleMessageItem } from '../models/people-message.model';

export interface PeopleMessageState {
  message: PeopleMessageItem[];
  loading: boolean;
  error: ErrorFailed | null;
}

export const initialStatePeopleMessage: PeopleMessageState = {
  message: [],
  loading: false,
  error: null
};

export const peopleMessageReducer = createReducer(
  initialStatePeopleMessage,
  on(
    getPeopleMessageAction,
    (state): PeopleMessageState => ({ ...state, loading: true })
  ),
  on(
    getPeopleMessageSuccessfulAction,
    (state, action): PeopleMessageState => ({
      ...state,
      message: action.items,
      loading: false
    })
  ),
  on(
    getPeopleMessageFailedAction,
    (state, { error }): PeopleMessageState => ({
      ...state,
      error,
      loading: false
    })
  ),

  on(
    sendPeopleMessageAction,
    (state): PeopleMessageState => ({ ...state, loading: true })
  ),
  on(
    sendPeopleMessageSuccessfulAction,
    (state, action): PeopleMessageState => ({
      ...state,
      message: [...state.message, action.item],
      loading: true
    })
  ),
  on(
    sendPeopleMessageFailedAction,
    (state, { error }): PeopleMessageState => ({
      ...state,
      error,
      loading: false
    })
  ),

  on(
    updatePeopleMessageAction,
    (state): PeopleMessageState => ({ ...state, loading: true })
  ),
  on(
    updatePeopleMessageSuccessfulAction,
    (state, action): PeopleMessageState => ({
      ...state,
      message: action.items,
      loading: false
    })
  ),
  on(
    updatePeopleMessageFailedAction,
    (state, { error }): PeopleMessageState => ({
      ...state,
      error,
      loading: false
    })
  )
);
