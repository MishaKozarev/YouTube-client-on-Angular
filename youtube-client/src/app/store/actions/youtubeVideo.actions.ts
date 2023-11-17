import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';

const actionYoutubeVideo = ['Video'];

export const fetchYoutube = createAction(`${actionYoutubeVideo} Fetch Video`);
export const fetchYoutubeSuccess = createAction(
  `${actionYoutubeVideo} Fetch Video Success`,
  props<{ video: Item }>()
);

export const fetchYoutubeFailed = createAction(
  `${actionYoutubeVideo} Fetch Video Failed`
);
