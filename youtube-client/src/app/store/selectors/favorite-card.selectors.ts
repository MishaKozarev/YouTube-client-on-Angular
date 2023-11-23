import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { FavoriteCardsState, State } from '../state.model';

export const selectFavoriteCardsState =
  createFeatureSelector<FavoriteCardsState>(State.favoriteCards);

export const selectFavoriteCardItems = createSelector(
  selectFavoriteCardsState,
  (state: FavoriteCardsState): Item[] => state.favoriteCards
);
