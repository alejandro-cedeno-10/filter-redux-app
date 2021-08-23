import { Todo } from './todo/models/todo.model';

import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoReducer from './todo/todo.reducer';
import * as fromFilterReducer from './filter/filter.reducer';
import { filterValids } from './filter/filter.action';


export interface AppState{
    todos: Todo[];
    filter: filterValids;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
    todos: fromTodoReducer.todoReducer,
    filter: fromFilterReducer.filterReducer
}