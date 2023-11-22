import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { FavoriteCardsState } from '../state.model';

export const selectFavoriteCardsState =
  createFeatureSelector<FavoriteCardsState>('favoriteCardsState');

export const selectFavoriteCardItems = createSelector(
  selectFavoriteCardsState,
  (state: FavoriteCardsState): Item[] => state.favoriteCards
);
