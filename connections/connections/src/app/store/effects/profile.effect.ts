import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ProfileService } from 'src/app/core/services/profile/profile.service';

import { getProfileSuccess } from '../actions/profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfileSuccess),
      switchMap(() =>
        this.profileService.sendProfileRequest()
        .pipe(
          map(profile => getProfileSuccess({profile}))
        ))
    )
  )
}
