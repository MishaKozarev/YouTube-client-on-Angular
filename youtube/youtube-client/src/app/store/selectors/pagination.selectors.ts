import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PaginationInfo, PaginationState, State } from '../state.model';

export const selectPaginationFeature = createFeatureSelector<PaginationState>(
  State.pagination
);

export const selectPaginationInfo = createSelector(
  selectPaginationFeature,
  (state: PaginationState): PaginationInfo => state.pagination
);
