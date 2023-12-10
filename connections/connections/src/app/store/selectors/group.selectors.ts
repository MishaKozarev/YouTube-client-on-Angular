import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GroupState } from '../models/group.models';

export const selectGroupState = createFeatureSelector<GroupState>('groupState');

export const selectGroup = createSelector(
  selectGroupState,
  (state) => state.groups
);
