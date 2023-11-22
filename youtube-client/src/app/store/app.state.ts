import {
  CustomCardsState,
  FavoriteCardsState,
  YoutubeCardsState
} from './state.model';

export interface AppState {
  customCardsState: CustomCardsState;
  youtubeCardsState: YoutubeCardsState;
  favoriteCardsState: FavoriteCardsState;
}
