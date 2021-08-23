import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromfilterActions from '../../filter/filter.action';
import * as fromTodoActions from '../todo.actions';
import { state } from '@angular/animations';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {

  pends!: number;

  filterValids: fromfilterActions.filterValids[] = [
    {
      value: 'all',
    },
    {
      value: 'completeds',
    },
    {
      value: 'pends',
    },
  ];

  filterActual!: fromfilterActions.filterValids;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.subscribe((state) => {
      const stateKeys = Object.values(state);

      this.counterPends(stateKeys[0]);

      this.filterActual = {
        value: stateKeys[1]['value'],
      };
    });
  }

  changeFilter(filter: fromfilterActions.filterValids) {
    this._store.dispatch(fromfilterActions.SET_FILTRO({ filter: filter }));
  }

  counterPends( todos : Todo[]){
    this.pends = todos.filter(todo => !todo.completed).length;
  }

  deleteTodo(){
    this._store.dispatch(fromTodoActions.deleteAllTodo());
  }
}
