import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PeopleMessageService } from 'src/app/core/services/people-message/people-message.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getPeopleMessageAction,
  getPeopleMessageFailedAction,
  getPeopleMessageSuccessfulAction,
  sendPeopleMessageAction,
  sendPeopleMessageFailedAction,
  sendPeopleMessageSuccessfulAction
} from '../actions/people-message.actions';

@Injectable()
export class PeopleMessageEffect {
  constructor(
    private actions$: Actions,
    private peopleMessageService: PeopleMessageService,
    private toastMessagesService: ToastMessagesService
  ) {}

  getPeopleMessageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPeopleMessageAction),
      switchMap((id) =>
        this.peopleMessageService
          .sendPeopleMessageRequest(id.conversationID)
          .pipe(
            map((companions) => {
              const items = companions.Items;
              const { conversationID } = id;
              const unitedItem = {
                conversationID,
                items
              };
              return getPeopleMessageSuccessfulAction(unitedItem);
            }),
            catchError((error) => {
              let message = error.statusText;
              if (error.status === 0) {
                message = 'No internet connection';
              } else {
                message = error.error.message;
              }
              this.toastMessagesService.showToastMessage(message, false);
              return of(getPeopleMessageFailedAction({ error }));
            })
          )
      )
    );
  });

  sendPeopleMessageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendPeopleMessageAction),
      switchMap((peopleMessage) =>
        this.peopleMessageService
          .sendPeopleSendNewMessageRequest(
            peopleMessage.conversationID,
            peopleMessage.message
          )
          .pipe(
            map(() => {
              const date = new Date();
              const messageItem = {
                item: {
                  authorID: { S: `${localStorage.getItem('uid')}` },
                  message: { S: `${localStorage.getItem('currentMessage')}` },
                  createdAt: { S: `${date}` }
                }
              };
              return sendPeopleMessageSuccessfulAction(messageItem);
            }),
            catchError((error) => {
              let message = error.statusText;
              if (error.status === 0) {
                message = 'No internet connection';
              } else {
                message = error.error.message;
              }
              this.toastMessagesService.showToastMessage(message, false);
              return of(sendPeopleMessageFailedAction({ error }));
            })
          )
      )
    );
  });
}
