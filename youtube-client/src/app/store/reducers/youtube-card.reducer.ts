import { createReducer, on } from '@ngrx/store';

import * as youtubeCardAction from '../actions/youtube-card.actions';
import { initialYoutubeCardsState, YoutubeCardsState } from '../state.model';

export const youtubeCardReducer = createReducer(
  initialYoutubeCardsState,
  on(
    youtubeCardAction.getYoutubeCard,
    (state): YoutubeCardsState => ({
      ...state
    })
  ),
  on(
    youtubeCardAction.getYoutubeCardSuccess,
    (state, { youtubeCards }): YoutubeCardsState => {
      return {
        ...state,
        youtubeCards: [...youtubeCards]
      };
    }
  )
);
