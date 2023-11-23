import { createFeatureSelector, createSelector } from '@ngrx/store';

import { paginationNode } from '../reducers/pagination.reducer';
import { PaginationInfo, PaginationState } from '../state.model';

export const selectPaginationFeature =
  createFeatureSelector<PaginationState>(paginationNode);

export const selectPaginationInfo = createSelector(
  selectPaginationFeature,
  (state: PaginationState): PaginationInfo => state.pagination
);
