import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getProfileAction,
  getProfileFailedAction,
  getProfileSuccessfulAction,
  logoutProfileAction,
  logoutProfileActionFailed,
  logoutProfileActionSuccess,
  updatedProfileNameAction,
  updateProfileNameActionFailed,
  updateProfileNameActionSuccess
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
      concatLatestFrom(() => this.store.select(selectProfile)),
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
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(getProfileFailedAction({ error }));
          })
        )
      )
    );
  });

  updateProfileEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatedProfileNameAction),
      switchMap((action) =>
        this.profileService
          .sendChangeProfileNameRequest({ name: action.name })
          .pipe(
            map(() => {
              const message = 'Name updated successful';
              this.toastMessagesService.showToastMessage(message, true);
              return updateProfileNameActionSuccess({
                name: action.name
              });
            }),
            catchError((error) => {
              let message = error.statusText;
              if (error.status === 0) {
                message = 'No internet connection';
              } else {
                message = error.error.message;
              }
              this.toastMessagesService.showToastMessage(message, false);
              return of(updateProfileNameActionFailed({ error }));
            })
          )
      )
    );
  });

  logoutProfileEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutProfileAction),
      switchMap(() =>
        this.profileService.sendDeleteProfileRequest().pipe(
          map(() => {
            const message = 'You have successful logout';
            this.toastMessagesService.showToastMessage(message, true);
            return logoutProfileActionSuccess();
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(logoutProfileActionFailed({ error }));
          })
        )
      )
    );
  });
}
