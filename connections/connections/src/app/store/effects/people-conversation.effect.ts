import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { PeopleConversationService } from 'src/app/core/services/people-conversation/people-conversation.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  createPeopleConversationAction,
  createPeopleConversationFailedAction,
  createPeopleConversationSuccessfulAction,
  deletePeopleConversationAction,
  deletePeopleConversationFailedAction,
  deletePeopleConversationSuccessfulAction,
  getPeopleConversationAction,
  getPeopleConversationFailedAction,
  getPeopleConversationSuccessfulAction
} from '../actions/people-conversation.actions';
import { CompanionsItem } from '../models/people-conversation.models';
import { selectPeopleConversation } from '../selectors/people-conversation.selectors';

@Injectable()
export class PeopleConversationEffect {
  constructor(
    private actions$: Actions,
    private peopleConversationService: PeopleConversationService,
    private store: Store,
    private toastMessagesService: ToastMessagesService
  ) {}

  getPeopleConversationListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPeopleConversationAction),
      concatLatestFrom(() => this.store.select(selectPeopleConversation)),
      switchMap(() =>
        this.peopleConversationService.sendPeopleConversationListRequest().pipe(
          map((peopleConversation) => {
            return getPeopleConversationSuccessfulAction(peopleConversation);
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(getPeopleConversationFailedAction({ error }));
          })
        )
      )
    );
  });

  cretePeopleConversationListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPeopleConversationAction),
      switchMap(({ companion }) =>
        this.peopleConversationService
          .sendCreatePeopleConversationRequest(companion)
          .pipe(
            map(({ conversationID }) => {
              const companionsItem: CompanionsItem = {
                id: { S: conversationID },
                companionID: { S: companion }
              };
              this.toastMessagesService.showToastMessage(
                'Conversation create successful',
                true
              );
              return createPeopleConversationSuccessfulAction(companionsItem);
            }),
            catchError((error) => {
              let message = error.statusText;
              if (error.status === 0) {
                message = 'No internet connection';
              } else {
                message = error.error.message;
              }
              this.toastMessagesService.showToastMessage(message, false);
              return of(createPeopleConversationFailedAction({ error }));
            })
          )
      )
    );
  });

  deletePeopleConversation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePeopleConversationAction),
      switchMap((conversationID) =>
        this.peopleConversationService
          .sendDeletePeopleDialogRequest(conversationID)
          .pipe(
            map(() => {
              this.toastMessagesService.showToastMessage(
                'The conversation was successful delete',
                true
              );
              return deletePeopleConversationSuccessfulAction(conversationID);
            }),
            catchError((error) => {
              let message = error.statusText;
              if (error.status === 0) {
                message = 'No internet connection';
              } else {
                message = error.error.message;
              }
              this.toastMessagesService.showToastMessage(message, false);
              return of(deletePeopleConversationFailedAction({ error }));
            })
          )
      )
    );
  });
}
