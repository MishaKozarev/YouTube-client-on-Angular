import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, filter, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getProfileAction,
  getProfileFailedAction,
  getProfileSuccessfulAction
} from '../actions/profile.actions';
import { selectProfile } from '../selectors/profile.selectors';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private profileService: ProfileService,
    private toastMessagesService: ToastMessagesService
  ) {}

  getProfileEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProfileAction),
      withLatestFrom(this.store.pipe(select(selectProfile))),
      switchMap(() =>
        this.profileService.sendProfileRequest().pipe(
          map((profile) =>
            getProfileSuccessfulAction({
              profile
            })
          ),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection'
            } else {
              message = error.error.message;
            }

            console.log(error);
            this.toastMessagesService.showToastMessage(message, false);
            return of(getProfileFailedAction({ error }));
          })
        )
      )
    );
  });
}
