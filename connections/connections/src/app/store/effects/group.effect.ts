import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { GroupService } from 'src/app/core/services/group/group.service';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  createGroupAction,
  createGroupFailedAction,
  createGroupSuccessfulAction,
  deleteGroupAction,
  deleteGroupSuccessfulAction,
  getGroupAction,
  getGroupFailedAction,
  getGroupSuccessfulAction,
  updateGroupList,
  updateGroupListSuccess
} from '../actions/group.actions';
import { GroupItem } from '../models/group.models';

@Injectable()
export class GroupEffect {
  constructor(
    private actions$: Actions,
    private groupService: GroupService,
    private toastMessagesService: ToastMessagesService,
    private timerService: TimerService
  ) {}

  getGroupListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGroupAction),
      switchMap(() =>
        this.groupService.sendGroupListRequest().pipe(
          map((group) => {
            return getGroupSuccessfulAction(group);
          }),
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
              'The group was successful created',
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

  deleteGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteGroupAction),
      switchMap((groupId) =>
        this.groupService.sendDeleteGroupRequest(groupId).pipe(
          map(() => {
            this.toastMessagesService.showToastMessage(
              'The group was successful delete',
              true
            );
            return deleteGroupSuccessfulAction(groupId);
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

  updateGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateGroupList),
      mergeMap(() =>
        this.groupService.sendGroupListRequest().pipe(
          map((groups) => {
            const timerName = 'timerUpdateGroup';
            this.timerService.createTimer(timerName, 60);
            this.timerService.startTimer(timerName);
            this.toastMessagesService.showToastMessage(
              'The group was successful update',
              true
            );
            return updateGroupListSuccess(groups);
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
