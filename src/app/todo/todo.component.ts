import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTodoActions from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  completed : boolean = false;

  constructor(private _store :Store) { }

  ngOnInit(): void {
  }

  toogleAll(){
    this.completed = !this.completed;

    this._store.dispatch(fromTodoActions.toogleAllTodo({completed: this.completed}))
  }
}
