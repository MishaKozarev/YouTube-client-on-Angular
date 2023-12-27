import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PeopleConversationState } from '../models/people-conversation.models';

export const selectPeopleConversationState =
  createFeatureSelector<PeopleConversationState>('peopleConversationState');

export const selectPeopleConversation = createSelector(
  selectPeopleConversationState,
  (state) => state.peopleConversation
);
