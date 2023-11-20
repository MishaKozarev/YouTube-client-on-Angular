import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { SearchFormService } from 'src/app/youtube/services/search-form/search-form.service';

import * as YoutubeCardActions from '../actions/youtubeVideo.actions';

@Injectable()
export class YoutubeCardEffects {
  constructor(
    private actions$: Actions,
    private searchFormService: SearchFormService
  ) {}

  getYoutubeCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeCardActions.getYoutubeCard),
      switchMap(() =>
        this.searchFormService.videos$.pipe(
          map((youtubeCards) =>
            YoutubeCardActions.getYoutubeCardSuccess({
              youtubeCards
            })
          )
        )
      )
    );
  });
}
