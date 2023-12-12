import { createAction, props } from '@ngrx/store';
import { ErrorFailed } from 'src/app/core/models/core.models';

import { PeopleActionTypes } from '../action-type/people-action.types';
import { PeopleItem } from '../models/people.models';

export const getPeopleAction = createAction(PeopleActionTypes.GET_PEOPLE);
export const getPeopleSuccessfulAction = createAction(
  PeopleActionTypes.GET_PEOPLE_SUCCESSFUL,
  props<{ Count: number; Items: PeopleItem[] }>()
);
export const getPeopleFailedAction = createAction(
  PeopleActionTypes.GET_PEOPLE_FAILED,
  props<{ error: ErrorFailed }>()
);

export const updatePeopleAction = createAction(PeopleActionTypes.UPDATE_PEOPLE);
export const updatePeopleSuccessfulAction = createAction(
  PeopleActionTypes.UPDATE_PEOPLE_SUCCESSFUL,
  props<{ Count: number; Items: PeopleItem[] }>()
);
export const updatePeopleFailedAction = createAction(
  PeopleActionTypes.UPDATE_PEOPLE_FAILED,
  props<{ error: ErrorFailed }>()
);
