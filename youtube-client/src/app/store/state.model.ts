import { Item } from '../youtube/models/search-item.model';

export interface CustomCardsState {
  customCards: Item[];
}

export interface YoutubeCardsState {
  youtubeCards: Item[];
}

export interface FavoriteCardsState {
  favoriteCards: Item[];
}

export interface PaginationInfo {
  nextPageToken: string;
  prevPageToken: string;
  page: number;
}

export interface PaginationState {
  pagination: PaginationInfo;
}

export const initialCustomCardsState: CustomCardsState = {
  customCards: []
};

export const initialYoutubeCardsState: YoutubeCardsState = {
  youtubeCards: []
};

export const initialFavoriteCardsState: FavoriteCardsState = {
  favoriteCards: []
};

export const initialState: PaginationState = {
  pagination: {
    nextPageToken: '',
    prevPageToken: '',
    page: 1
  }
};
