import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { CustomCard } from '../state.model';

export const getCustomCard = createAction(
  '[ADMIN_PAGE] GET CUSTOM CARD',
  props<{ cardId: CustomCard }>()
);

export const createCustomCard = createAction(
  '[ADMIN_PAGE] CREATE CUSTOM CARD',
  props<{ newCard: Item }>()
);

export const updateCustomCard = createAction(
  '[ADMIN_PAGE] COMPLETE CUSTOM CARD',
  props<{ card: CustomCard }>()
);

export const deleteCustomCard = createAction(
  '[ADMIN_PAGE] UPDATE CUSTOM CARD',
  props<{ card: Item }>()
);

export const completeCustomCard = createAction(
  '[ADMIN_PAGE] DELETE CUSTOM CARD',
  props<{ card: CustomCard }>()
);
