import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { GroupMessageService } from 'src/app/core/services/group-message/group-message.service';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getGroupMessageAction,
  getGroupMessageFailedAction,
  getGroupMessageSuccessfulAction,
  sendGroupMessageAction,
  sendGroupMessageFailedAction,
  sendGroupMessageSuccessfulAction,
  updateGroupMessageAction,
  updateGroupMessageFailedAction,
  updateGroupMessageSuccessfulAction
} from '../actions/group-message.actions';

@Injectable()
export class GroupMessageEffect {
  constructor(
    private actions$: Actions,
    private groupMessageService: GroupMessageService,
    private toastMessagesService: ToastMessagesService,
    private timerService: TimerService
  ) {}

  getGroupMessageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGroupMessageAction),
      switchMap((id) =>
        this.groupMessageService.sendGroupMessageRequest(id.groupID).pipe(
          map((messages) => {
            const items = messages.Items;
            const { groupID } = id;
            const unitedItem = {
              groupID,
              items
            };
            return getGroupMessageSuccessfulAction(unitedItem);
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(getGroupMessageFailedAction({ error }));
          })
        )
      )
    );
  });

  sendGroupMessageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendGroupMessageAction),
      switchMap((groupMessage) =>
        this.groupMessageService
          .sendGroupSendNewMessageRequest(
            groupMessage.groupID,
            groupMessage.message
          )
          .pipe(
            map(() => {
              const date = new Date();
              const messageItem = {
                item: {
                  authorID: { S: `${localStorage.getItem('uid')}` },
                  message: { S: `${localStorage.getItem('groupMessage')}` },
                  createdAt: { S: `${date}` }
                }
              };
              return sendGroupMessageSuccessfulAction(messageItem);
            }),
            catchError((error) => {
              let message = error.statusText;
              if (error.status === 0) {
                message = 'No internet connection';
              } else {
                message = error.error.message;
              }
              this.toastMessagesService.showToastMessage(message, false);
              return of(sendGroupMessageFailedAction({ error }));
            })
          )
      )
    );
  });

  updateGroupMessageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateGroupMessageAction),
      mergeMap((id) =>
        this.groupMessageService.sendGroupMessageRequest(id.groupID).pipe(
          map((messages) => {
            const timerName = 'timerUpdateGroupMessage';
            this.timerService.createTimer(timerName, 60);
            this.timerService.startTimer(timerName);
            this.toastMessagesService.showToastMessage(
              'The group was successful update',
              true
            );
            const items = messages.Items;
            const { groupID } = id;
            const unitedItem = {
              groupID,
              items
            };
            return updateGroupMessageSuccessfulAction(unitedItem);
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(updateGroupMessageFailedAction({ error }));
          })
        )
      )
    );
  });
}
