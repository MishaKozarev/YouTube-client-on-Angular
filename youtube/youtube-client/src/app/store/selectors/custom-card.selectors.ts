import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CustomCardsState, State } from '../state.model';

export const selectCustomCardsState = createFeatureSelector<CustomCardsState>(
  State.customCards
);

export const selectCustomCardsItems = createSelector(
  selectCustomCardsState,
  (state) => state.customCards
);
