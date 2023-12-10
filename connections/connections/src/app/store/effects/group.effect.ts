import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GroupService } from 'src/app/core/services/group/group.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getGroupAction,
  getGroupFailedAction,
  getGroupSuccessfulAction
} from '../actions/group.action';

@Injectable()
export class GroupEffect {
  constructor(
    private actions$: Actions,
    private groupService: GroupService,
    private toastMessagesService: ToastMessagesService
  ) {}

  getGroupListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGroupAction),
      switchMap(() =>
        this.groupService.sendGroupListRequest().pipe(
          map((group) => getGroupSuccessfulAction(group)),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(getGroupFailedAction({ error }));
          })
        )
      )
    );
  });
}
