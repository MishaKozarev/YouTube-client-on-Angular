import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FavoriteCardsState } from '../state.model';

export const selectFavoriteCardsState =
  createFeatureSelector<FavoriteCardsState>('favoriteCardsState');

export const selectFavoriteCardItems = createSelector(
  selectFavoriteCardsState,
  (state) => state.favoriteCards
);
