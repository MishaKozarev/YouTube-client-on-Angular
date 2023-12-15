import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GroupMessageService } from 'src/app/core/services/group-message/group-message.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getGroupMessageAction,
  getGroupMessageFailedAction,
  getGroupMessageSuccessfulAction,
  sendGroupMessageAction,
  sendGroupMessageFailedAction,
  sendGroupMessageSuccessfulAction
} from '../actions/group-message.actions';

@Injectable()
export class GroupMessageEffect {
  constructor(
    private actions$: Actions,
    private groupMessageService: GroupMessageService,
    private toastMessagesService: ToastMessagesService
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
}
