import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getProfileAction,
  getProfileFailedAction,
  getProfileSuccessfulAction
} from '../actions/profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private toastMessagesService: ToastMessagesService
  ) {}

  getProfileEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProfileAction),
      switchMap(() =>
        this.profileService.sendProfileRequest().pipe(
          map((profile) =>
            getProfileSuccessfulAction({
              profile
            })
          ),
          catchError((error) => {
            const { message } = error.error;
            this.toastMessagesService.showToastMessage(message, false);
            return of(getProfileFailedAction({ error }));
          })
        )
      )
    );
  });
}
