import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { YoutubeCardActionTypes } from '../../actions-type/youtube-actions-type';

export const youtubeAddCardAction = createAction(
  YoutubeCardActionTypes.ADD_CARD,
  props<{ youtubeCards: Item }>()
);

export const youtubeAddCardsAction = createAction(
  YoutubeCardActionTypes.ADD_CARDS,
  props<{ youtubeCards: Item[] }>()
);

export const youtubeClearCardsAction = createAction(
  YoutubeCardActionTypes.CLEAR
);

export const youtubeSearchAction = createAction(
  YoutubeCardActionTypes.SEARCH_QUERY,
  props<{ query: string; queryLength: number }>()
);

export const youtubeSearchOnPageAction = createAction(
  YoutubeCardActionTypes.SEARCH_ON_PAGE,
  props<{
    query: string;
    token: string;
  }>()
);
