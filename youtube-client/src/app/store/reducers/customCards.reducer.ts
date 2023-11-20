import { createReducer, on } from '@ngrx/store';

import * as customCardAction from '../actions/customCards.actions';
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
  )
);
