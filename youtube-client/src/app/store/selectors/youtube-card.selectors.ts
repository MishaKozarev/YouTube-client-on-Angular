import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, YoutubeCardsState } from '../state.model';

export const selectYoutubeCardsState = createFeatureSelector<YoutubeCardsState>(
  State.youtubeCards
);

export const selectYoutubeCardItems = createSelector(
  selectYoutubeCardsState,
  (state) => state.youtubeCards
);
