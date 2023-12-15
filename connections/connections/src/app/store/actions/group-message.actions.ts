import { createAction, props } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import { GroupMessageActionTypes } from '../action-type/group-message-action.types';
import { GroupMessageItem } from '../models/group-message.models';

export const getGroupMessageAction = createAction(
  GroupMessageActionTypes.GET_GROUP_MESSAGE,
  props<{ groupID: string }>()
);
export const getGroupMessageSuccessfulAction = createAction(
  GroupMessageActionTypes.GET_GROUP__MESSAGE_SUCCESSFUL,
  props<{ groupID: string; items: GroupMessageItem[] }>()
);
export const getGroupMessageFailedAction = createAction(
  GroupMessageActionTypes.GET_GROUP__MESSAGE_FAILED,
  props<{ error: ErrorFailed }>()
);

export const sendGroupMessageAction = createAction(
  GroupMessageActionTypes.SEND_GROUP_MESSAGE,
  props<{ groupID: string; message: string }>()
);
export const sendGroupMessageSuccessfulAction = createAction(
  GroupMessageActionTypes.SEND_GROUP__MESSAGE_SUCCESSFUL,
  props<{ item: GroupMessageItem }>()
);
export const sendGroupMessageFailedAction = createAction(
  GroupMessageActionTypes.SEND_GROUP__MESSAGE_FAILED,
  props<{ error: ErrorFailed }>()
);

export const updateGroupMessageAction = createAction(
  GroupMessageActionTypes.UPDATE_GROUP_MESSAGE,
  props<{ groupID: string }>()
);
export const updateGroupMessageSuccessfulAction = createAction(
  GroupMessageActionTypes.UPDATE_GROUP_MESSAGE_SUCCESSFUL,
  props<{ groupID: string; items: GroupMessageItem[] }>()
);
export const updateGroupMessageFailedAction = createAction(
  GroupMessageActionTypes.UPDATE_GROUP_MESSAGE_FAILED,
  props<{ error: ErrorFailed }>()
);
