import {
  CustomCardsState,
  FavoriteCardsState,
  PaginationState,
  YoutubeCardsState
} from './state.model';

export interface AppState {
  customCardsState: CustomCardsState;
  youtubeCardsState: YoutubeCardsState;
  favoriteCardsState: FavoriteCardsState;
  paginationState: PaginationState;
}
