import { createAction, props } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import { PeopleConversationActionTypes } from '../action-type/people-conversation-action.types';
import { CompanionsItem } from '../models/people-conversation.models';

export const getPeopleConversationAction = createAction(
  PeopleConversationActionTypes.GET_PEOPLE_CONVERSATION
);
export const getPeopleConversationSuccessfulAction = createAction(
  PeopleConversationActionTypes.GET_PEOPLE_CONVERSATION_SUCCESSFUL,
  props<{ Count: number; Items: CompanionsItem[] }>()
);
export const getPeopleConversationFailedAction = createAction(
  PeopleConversationActionTypes.GET_PEOPLE_CONVERSATION_FAILED,
  props<{ error: ErrorFailed }>()
);

export const createPeopleConversationAction = createAction(
  PeopleConversationActionTypes.CREATE_PEOPLE_CONVERSATION,
  props<{ companion: string }>()
);
export const createPeopleConversationSuccessfulAction = createAction(
  PeopleConversationActionTypes.CREATE_PEOPLE_CONVERSATION_SUCCESSFUL,
  props<{ id: { S: string }; companionID: { S: string } }>()
);
export const createPeopleConversationFailedAction = createAction(
  PeopleConversationActionTypes.CREATE_PEOPLE_CONVERSATION_FAILED,
  props<{ error: ErrorFailed }>()
);

export const deletePeopleConversationAction = createAction(
  PeopleConversationActionTypes.DELETE_PEOPLE_CONVERSATION,
  props<{ conversationID: string }>()
);
export const deletePeopleConversationSuccessfulAction = createAction(
  PeopleConversationActionTypes.DELETE_PEOPLE_CONVERSATION_SUCCESSFUL,
  props<{ conversationID: string }>()
);
export const deletePeopleConversationFailedAction = createAction(
  PeopleConversationActionTypes.DELETE_PEOPLE_CONVERSATION_FAILED,
  props<{ error: ErrorFailed }>()
);
