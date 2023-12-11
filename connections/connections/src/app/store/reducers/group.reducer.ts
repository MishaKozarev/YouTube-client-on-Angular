import { createReducer, on } from '@ngrx/store';

import {
  createGroupAction,
  createGroupFailedAction,
  createGroupSuccessfulAction,
  getGroupAction,
  getGroupFailedAction,
  getGroupSuccessfulAction
} from '../actions/group.action';
import { GroupState } from '../models/group.models';

export const initialStateGroup: GroupState = {
  groups: [],
  loading: false,
  error: null
};

export const groupReducer = createReducer(
  initialStateGroup,
  on(getGroupAction, (state): GroupState => ({ ...state, loading: true })),
  on(
    getGroupSuccessfulAction,
    (state, groupAction): GroupState => ({
      ...state,
      groups: groupAction.Items,
      loading: false
    })
  ),
  on(
    getGroupFailedAction,
    (state, { error }): GroupState => ({
      ...state,
      error,
      loading: false
    })
  ),
  on(createGroupAction, (state): GroupState => ({ ...state, loading: true })),
  on(
    createGroupSuccessfulAction,
    (state, action): GroupState => ({
      ...state,
      groups: [...state.groups, action],
      loading: false,
      error: null
    })
  ),
  on(
    createGroupFailedAction,
    (state, { error }): GroupState => ({
      ...state,
      error,
      loading: false
    })
  )
);
