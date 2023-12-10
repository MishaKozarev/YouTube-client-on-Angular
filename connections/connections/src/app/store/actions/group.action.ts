import { createAction, props } from '@ngrx/store';

import { GroupActionTypes } from '../action-type/group-action.types';
import { ErrorFailed, GroupItem } from '../models/group.models';

export const getGroupAction = createAction(GroupActionTypes.GET_GROUP);
export const getGroupSuccessfulAction = createAction(
  GroupActionTypes.GET_GROUP_SUCCESSFUL,
  props<{ Count: number; Items: GroupItem[] }>()
);
export const getGroupFailedAction = createAction(
  GroupActionTypes.GET_GROUP_FAILED,
  props<{ error: ErrorFailed }>()
);
