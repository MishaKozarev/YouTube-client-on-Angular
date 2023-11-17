import { Item } from '../youtube/models/search-item.model';

export class CardModel implements CustomCard {
  constructor(
    public id: number = 1,
    public title: string = '',
    public description: string = '',
    public img: string = '',
    public link: string = '',
    public date: string = ''
  ) {}
}

export interface CustomCard {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
}

export interface CustomCardsState {
  customCards: CustomCard[];
}

export interface YoutubeCardsState {
  youtubeCards: Item[];
}

export const initialCustomCardsState: CustomCardsState = {
  customCards: [new CardModel(0, 'Title', 'Description', '', '', '')]
};

export const initialYoutubeCardsState: YoutubeCardsState = {
  youtubeCards: []
};
