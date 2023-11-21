import { createReducer, on } from '@ngrx/store';

import * as customCardAction from '../actions/custom-card.actions';
import { CustomCardsState, initialCustomCardsState } from '../state.model';

export const customCardReducer = createReducer(
  initialCustomCardsState,
  on(
    customCardAction.createCustomCard,
    (state, { customCards }): CustomCardsState => {
      return {
        ...state,
        customCards: [...state.customCards, customCards]
      };
    }
  ),
  on(customCardAction.deleteCustomCard, (state: CustomCardsState, { id }) => ({
    ...state,
    customCards: [...state.customCards.filter((card) => card.id.videoId !== id)]
  }))
);
