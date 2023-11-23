import { createAction, props } from '@ngrx/store';

import { PaginationActionsType } from '../actions-type/pagination-action-type';
import { PaginationInfo } from '../state.model';

export const paginationAddInfoAction = createAction(
  PaginationActionsType.ADD_TOKEN,
  props<{ info: Omit<PaginationInfo, 'page'> }>()
);

export const paginationChangePageAction = createAction(
  PaginationActionsType.CHANGE_PAGE,
  props<{ page: number }>()
);
