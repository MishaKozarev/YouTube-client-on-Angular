import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

const actionYoutubeVideo = ['Video'];

export const getYoutubeCard = createAction(`${actionYoutubeVideo} Fetch Video`);

export const getYoutubeCardSuccess = createAction(
  `${actionYoutubeVideo} Fetch Video Success`,
  props<{ youtubeCards: Item[] }>()
);
