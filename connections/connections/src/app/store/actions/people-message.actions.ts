import { createAction, props } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import { PeopleMessageActionTypes } from '../action-type/people-message-action.types';
import { PeopleMessageItem } from '../models/people-message.model';

export const getPeopleMessageAction = createAction(
  PeopleMessageActionTypes.GET_PEOPLE_MESSAGE,
  props<{ conversationID: string }>()
);
export const getPeopleMessageSuccessfulAction = createAction(
  PeopleMessageActionTypes.GET_PEOPLE_MESSAGE_SUCCESSFUL,
  props<{ conversationID: string; items: PeopleMessageItem[] }>()
);
export const getPeopleMessageFailedAction = createAction(
  PeopleMessageActionTypes.GET_PEOPLE_MESSAGE_FAILED,
  props<{ error: ErrorFailed }>()
);
