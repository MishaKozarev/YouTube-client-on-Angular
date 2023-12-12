import { createAction, props } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import { GroupActionTypes } from '../action-type/group-action.types';
import { GroupItem } from '../models/group.models';

export const getGroupAction = createAction(GroupActionTypes.GET_GROUP);
export const getGroupSuccessfulAction = createAction(
  GroupActionTypes.GET_GROUP_SUCCESSFUL,
  props<{ Count: number; Items: GroupItem[] }>()
);
export const getGroupFailedAction = createAction(
  GroupActionTypes.GET_GROUP_FAILED,
  props<{ error: ErrorFailed }>()
);

export const createGroupAction = createAction(
  GroupActionTypes.CREATE_GROUP,
  props<{
    name: string;
    createdAt: string;
    createdBy: string;
  }>()
);
export const createGroupSuccessfulAction = createAction(
  GroupActionTypes.CREATE_GROUP_SUCCESSFUL,
  props<{
    id: { S: string };
    name: { S: string };
    createdAt: { S: string };
    createdBy: { S: string };
  }>()
);
export const createGroupFailedAction = createAction(
  GroupActionTypes.CREATE_GROUP_FAILED,
  props<{ error: ErrorFailed }>()
);

export const deleteGroupAction = createAction(
  GroupActionTypes.DELETE_GROUP,
  props<{ groupID: string }>()
);
export const deleteGroupSuccessfulAction = createAction(
  GroupActionTypes.DELETE_GROUP_SUCCESSFUL,
  props<{ groupID: string }>()
);
export const deleteGroupFailedAction = createAction(
  GroupActionTypes.DELETE_GROUP_FAILED,
  props<{ error: ErrorFailed }>()
);

export const updateGroupList = createAction(GroupActionTypes.UPDATE_GROUP);

export const updateGroupListSuccess = createAction(
  GroupActionTypes.UPDATE_GROUP_SUCCESSFUL,
  props<{ Count: number; Items: GroupItem[] }>()
);

export const updateGroupListFailure = createAction(
  GroupActionTypes.UPDATE_GROUP_FAILED,
  props<{ error: ErrorFailed }>()
);
