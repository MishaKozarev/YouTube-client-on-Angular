import { YoutubeCardState } from './reducers/youtubeCard.reducer';
import { CustomCardsState } from './state.model';

export interface AppState {
  customCardsState: CustomCardsState;
  youtubeCards: YoutubeCardState;
}
