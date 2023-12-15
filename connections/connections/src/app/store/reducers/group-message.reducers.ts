import { createReducer, on } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import {
  getGroupMessageAction,
  getGroupMessageFailedAction,
  getGroupMessageSuccessfulAction
} from '../actions/group-message.actions';
import { GroupMessageItem } from '../models/group-message.models';

export interface GroupMessageState {
  message: GroupMessageItem[];
  loading: boolean;
  error: ErrorFailed | null;
}

export const initialStateGroupMessage: GroupMessageState = {
  message: [],
  loading: false,
  error: null
};

export const groupMessageReducer = createReducer(
  initialStateGroupMessage,
  on(
    getGroupMessageAction,
    (state): GroupMessageState => ({ ...state, loading: true })
  ),
  on(
    getGroupMessageSuccessfulAction,
    (state, action): GroupMessageState => ({
      ...state,
      message: action.items,
      loading: false
    })
  ),
  on(
    getGroupMessageFailedAction,
    (state, { error }): GroupMessageState => ({
      ...state,
      error,
      loading: false
    })
  )
);
