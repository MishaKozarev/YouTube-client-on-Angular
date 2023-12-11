import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GroupService } from 'src/app/core/services/group/group.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  createGroupAction,
  createGroupFailedAction,
  createGroupSuccessfulAction,
  getGroupAction,
  getGroupFailedAction,
  getGroupSuccessfulAction
} from '../actions/group.action';
import { GroupItem } from '../models/group.models';

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

  createGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createGroupAction),
      switchMap((group) =>
        this.groupService.sendCreateGroupRequest({ name: group.name }).pipe(
          map((groupID) => {
            const newGroup: GroupItem = {
              id: {
                S: groupID.groupID
              },
              name: {
                S: group.name
              },
              createdAt: {
                S: Date.now().toString()
              },
              createdBy: {
                S: group.createdBy
              }
            };
            this.toastMessagesService.showToastMessage(
              'The group was successfully created',
              true
            );
            return createGroupSuccessfulAction(newGroup);
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(createGroupFailedAction({ error }));
          })
        )
      )
    );
  });
}
