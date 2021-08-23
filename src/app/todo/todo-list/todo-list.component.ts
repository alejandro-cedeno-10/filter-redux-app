import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterValids } from 'src/app/filter/filter.action';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro! : filterValids;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.subscribe(state =>{
      this.todos =  state.todos;
      this.filtro = state.filter;
    })
  }

 

}
