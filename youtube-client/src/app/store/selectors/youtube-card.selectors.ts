import { createFeatureSelector, createSelector } from '@ngrx/store';

import { YoutubeCardsState } from '../state.model';

export const selectYoutubeCardsState =
  createFeatureSelector<YoutubeCardsState>('youtubeCardsState');

export const selectYoutubeCardItems = createSelector(
  selectYoutubeCardsState,
  (state) => state.youtubeCards
);
