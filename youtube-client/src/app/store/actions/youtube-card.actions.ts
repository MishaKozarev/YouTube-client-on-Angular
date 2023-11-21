import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

export const getYoutubeCard = createAction('[YOUTUBE_PAGE] GET YOUTUBE CARD');

export const getYoutubeCardSuccess = createAction(
  '[YOUTUBE_PAGE] GET YOUTUBE CARD SUCCESS',
  props<{ youtubeCards: Item[] }>()
);
