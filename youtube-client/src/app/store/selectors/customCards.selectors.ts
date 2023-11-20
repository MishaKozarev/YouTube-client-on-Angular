import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CustomCardsState } from '../state.model';

export const selectCustomCardsState =
  createFeatureSelector<CustomCardsState>('customCardsState');

export const selectCustomCardsItems = createSelector(
  selectCustomCardsState,
  (state) => state.customCards
);
