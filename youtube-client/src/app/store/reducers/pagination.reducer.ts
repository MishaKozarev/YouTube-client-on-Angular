/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createReducer, on } from '@ngrx/store';

import * as PaginationActions from '../actions/pagination.actions';
import { initialState, PaginationState } from '../state.model';

export const paginationReducer = createReducer(
  initialState,
  on(
    PaginationActions.paginationAddInfoAction,
    (state: PaginationState, { info }) => ({
      ...state,
      pagination: {
        ...state.pagination,
        ...info
      }
    })
  ),
  on(
    PaginationActions.paginationChangePageAction,
    (state: PaginationState, { page }) => ({
      ...state,
      pagination: {
        ...state.pagination,
        page
      }
    })
  )
);
