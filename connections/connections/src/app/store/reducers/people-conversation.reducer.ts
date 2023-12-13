import { createReducer, on } from '@ngrx/store';

import {
  createPeopleConversationAction,
  createPeopleConversationFailedAction,
  createPeopleConversationSuccessfulAction,
  getPeopleConversationAction,
  getPeopleConversationFailedAction,
  getPeopleConversationSuccessfulAction
} from '../actions/people-conversation.actions';
import { PeopleConversationState } from '../models/people-conversation.models';

export const initialStatePeopleConversation: PeopleConversationState = {
  peopleConversation: [],
  loading: false,
  error: null
};

export const peopleConversationReducer = createReducer(
  initialStatePeopleConversation,
  on(
    getPeopleConversationAction,
    (state): PeopleConversationState => ({ ...state, loading: true })
  ),
  on(
    getPeopleConversationSuccessfulAction,
    (state, action): PeopleConversationState => ({
      ...state,
      peopleConversation: action.Items,
      loading: false
    })
  ),
  on(
    getPeopleConversationFailedAction,
    (state, { error }): PeopleConversationState => ({
      ...state,
      error,
      loading: false
    })
  ),

  on(
    createPeopleConversationAction,
    (state): PeopleConversationState => ({ ...state, loading: true })
  ),
  on(
    createPeopleConversationSuccessfulAction,
    (state, action): PeopleConversationState => ({
      ...state,
      peopleConversation: [...state.peopleConversation, action],
      loading: false
    })
  ),
  on(
    createPeopleConversationFailedAction,
    (state, { error }): PeopleConversationState => ({
      ...state,
      error,
      loading: false
    })
  )
);
