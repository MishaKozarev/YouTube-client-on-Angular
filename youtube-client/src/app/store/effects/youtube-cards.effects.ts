import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import { Item } from 'src/app/youtube/models/search-item.model';
import VideoItems from 'src/app/youtube/models/search-response.model';
import { ResponseService } from 'src/app/youtube/services/response/response.service';

import * as YoutubeCardActions from '../actions/youtube-card/youtube-card.actions';

@Injectable()
export class YoutubeCardEffects {
  constructor(
    private actions$: Actions,
    private responseService: ResponseService
  ) {}

  getVideoCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeCardActions.youtubeSearchAction),
      filter(({ query, queryLength }) => query.length > queryLength),
      debounceTime(500),
      switchMap((action) => this.responseService.getList(action.query)),
      map((videoItems) =>
        YoutubeCardActions.youtubeAddCardsAction({
          youtubeCards: this.convertItemsToCards(videoItems)
        })
      )
    );
  });

  getVideoCardsOnPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeCardActions.youtubeSearchOnPageAction),
      switchMap((action) =>
        this.responseService.getVideosOnPage(action.query, action.token)
      ),
      map((videoItems) =>
        YoutubeCardActions.youtubeAddCardsAction({
          youtubeCards: this.convertItemsToCards(videoItems)
        })
      )
    );
  });

  private convertItemsToCards(videoItems: VideoItems): Item[] {
    return videoItems.items.map((card) => ({
      etag: 'string',
      id: card.id,
      snippet: {
        publishedAt: card.snippet.publishedAt,
        title: card.snippet.title,
        description: card.snippet.description,
        thumbnails: {
          default: {
            url: 'string',
            width: 480,
            height: 360
          },
          high: {
            url: card.snippet.thumbnails.high.url,
            width: 480,
            height: 360
          }
        },
        channelTitle: 'string',
        tags: []
      },
      statistics: {
        viewCount: card.statistics.viewCount,
        likeCount: card.statistics.likeCount,
        dislikeCount: card.statistics.dislikeCount,
        favoriteCount: card.statistics.favoriteCount,
        commentCount: card.statistics.commentCount
      }
    }));
  }
}
