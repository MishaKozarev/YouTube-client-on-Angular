import { Action, createReducer, on } from '@ngrx/store';
import * as customCardAction from '../actions/customCards.actions';
import { CustomCardsState, initialCustomCardsState } from '../state.model';

export const reducer = createReducer(
  initialCustomCardsState,
  on(customCardAction.createCustomCard, (state) => {
    return { ...state };
  }),
  on(customCardAction.deleteCustomCard, (state) => {
    return { ...state };
  })
  // on(createCustomCard, (state, {newCard}) => ({
  //     ...state, newCard: [...state.customCards, newCard]
  // }))
);

export function customCardReducer(state: CustomCardsState, action: Action) {
  return reducer(state, action);
}
