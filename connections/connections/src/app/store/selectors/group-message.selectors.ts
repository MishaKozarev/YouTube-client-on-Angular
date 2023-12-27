import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GroupMessageState } from '../reducers/group-message.reducers';

export const selectGroupMessageState =
  createFeatureSelector<GroupMessageState>('groupMessageState');

export const selectGroupMessage = createSelector(
  selectGroupMessageState,
  (state) => state.message
);
