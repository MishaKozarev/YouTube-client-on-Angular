import { createReducer, on } from '@ngrx/store';

import * as favoriteCardAction from '../actions/favorite-card/favorite-card.actions';
import { FavoriteCardsState, initialFavoriteCardsState } from '../state.model';

export const favoriteCardReducer = createReducer(
  initialFavoriteCardsState,
  on(
    favoriteCardAction.addFavoriteCard,
    (state: FavoriteCardsState, { card }) => ({
      ...state,
      favoriteCards: [...state.favoriteCards, card]
    })
  ),
  on(
    favoriteCardAction.deleteFavoriteCard,
    (state: FavoriteCardsState, { id }) => ({
      ...state,
      favoriteCards: [...state.favoriteCards.filter((card) => card.id !== id)]
    })
  )
);
