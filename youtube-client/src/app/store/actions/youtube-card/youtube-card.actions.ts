import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

import { YoutubeCardActionTypes } from '../../actions-type/youtube-actions-type';

export const youtubeAddCardAction = createAction(
  YoutubeCardActionTypes.ADD_YOUTUBE_CARD,
  props<{ youtubeCards: Item }>()
);

export const youtubeAddCardsAction = createAction(
  YoutubeCardActionTypes.ADD_YOUTUBE_CARDS,
  props<{ youtubeCards: Item[] }>()
);

export const youtubeClearCardsAction = createAction(
  YoutubeCardActionTypes.CLEAR_YOUTUBE_CARDS
);

export const youtubeSearchAction = createAction(
  YoutubeCardActionTypes.SEARCH_QUERY_YOUTUBE_CARDS,
  props<{ query: string; queryLength: number }>()
);

export const youtubeSearchOnPageAction = createAction(
  YoutubeCardActionTypes.SEARCH_ON_PAGE_YOUTUBE_CARDS,
  props<{
    query: string;
    token: string;
  }>()
);
