import { createReducer, on } from '@ngrx/store';

import * as youtubeCardAction from '../actions/youtube-card.actions';
import { initialYoutubeCardsState, YoutubeCardsState } from '../state.model';

export const youtubeCardReducer = createReducer(
  initialYoutubeCardsState,
  on(
    youtubeCardAction.youtubeAddCardAction,
    (state: YoutubeCardsState, { youtubeCards }) => ({
      ...state,
      youtubeCards: [...state.youtubeCards, youtubeCards]
    })
  ),
  on(
    youtubeCardAction.youtubeAddCardsAction,
    (state: YoutubeCardsState, { youtubeCards }) => ({
      ...state,
      youtubeCards: [...state.youtubeCards, ...youtubeCards]
    })
  ),
  on(youtubeCardAction.youtubeClearCardsAction, (state: YoutubeCardsState) => ({
    ...state,
    youtubeCards: []
  }))
);
