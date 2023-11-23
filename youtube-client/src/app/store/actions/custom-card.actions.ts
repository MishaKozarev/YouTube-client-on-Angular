import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { CustomCardActionTypes } from '../actions-type/custom-action-types';

export const getCustomCard = createAction(
  CustomCardActionTypes.GET,
  props<{ cardId: string }>()
);

export const createCustomCard = createAction(
  CustomCardActionTypes.CREATE,
  props<{ customCards: Item }>()
);

export const deleteCustomCard = createAction(
  CustomCardActionTypes.DELETE,
  props<{ id: string }>()
);
