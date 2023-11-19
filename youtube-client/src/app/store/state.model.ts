import { Item } from '../youtube/models/search-item.model';

export interface CustomCardsState {
  customCards: Item[];
}

export interface YoutubeCardsState {
  youtubeCards: Item[];
}

export const initialCustomCardsState: CustomCardsState = {
  customCards: []
};

export const initialYoutubeCardsState: YoutubeCardsState = {
  youtubeCards: []
};
