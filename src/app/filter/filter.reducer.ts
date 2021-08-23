import * as fromFilterActions from './filter.action';
import { createReducer, on, Action } from '@ngrx/store';

const stateInit: fromFilterActions.filterValids = {
    value: "all"
};

export const filterReducer = createReducer(
  stateInit,
  on(fromFilterActions.SET_FILTRO, (state, { filter }) => {
    return {
        ...state,
        value: filter.value
    };
  })
);

