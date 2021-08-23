import { Action, createAction, props } from '@ngrx/store';

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export interface filterValids {
  value: 'all' | 'completeds' | 'pends';
}

export const SET_FILTRO = createAction(
  '[Filter] Set Filter',
  props<{ filter: filterValids }>()
);

