import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { ToastMessagesService } from 'src/app/core/services/toast-message/toast-messages.service';

import {
  getPeopleAction,
  getPeopleFailedAction,
  getPeopleSuccessfulAction,
  updatePeopleAction,
  updatePeopleFailedAction,
  updatePeopleSuccessfulAction
} from '../actions/people.actions';

@Injectable()
export class PeopleEffect {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService,
    private toastMessagesService: ToastMessagesService,
    private timerService: TimerService
  ) {}

  getPeopleListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPeopleAction),
      switchMap(() =>
        this.peopleService.sendPeopleListRequest().pipe(
          map((people) => {
            return getPeopleSuccessfulAction(people);
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(getPeopleFailedAction({ error }));
          })
        )
      )
    );
  });

  updatePeopleEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePeopleAction),
      mergeMap(() =>
        this.peopleService.sendPeopleListRequest().pipe(
          map((peoples) => {
            const timerName = 'timerUpdatePeoples';
            this.timerService.createTimer(timerName, 60);
            this.timerService.startTimer(timerName);
            this.toastMessagesService.showToastMessage(
              'The peoples was successful update',
              true
            );
            return updatePeopleSuccessfulAction(peoples);
          }),
          catchError((error) => {
            let message = error.statusText;
            if (error.status === 0) {
              message = 'No internet connection';
            } else {
              message = error.error.message;
            }
            this.toastMessagesService.showToastMessage(message, false);
            return of(updatePeopleFailedAction({ error }));
          })
        )
      )
    );
  });
}
