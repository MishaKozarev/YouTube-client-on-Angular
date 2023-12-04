import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { FavoriteCardActionTypes } from '../../actions-type/favorite-card-actions';

export const addFavoriteCard = createAction(
  FavoriteCardActionTypes.ADD_FAVORITE_CARD,
  props<{ card: Item }>()
);

export const deleteFavoriteCard = createAction(
  FavoriteCardActionTypes.DELETE_FAVORITE_CARD,
  props<{ id: string }>()
);
