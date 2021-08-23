import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromTodoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('txtInputDom') txtInputDom!: ElementRef;

  checkFiel!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;

  constructor( private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkFiel = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    
    this.checkFiel.valueChanges.subscribe(
      () => {
        const action = fromTodoActions.toogleTodo(this.todo);
        this._store.dispatch(action);
      }
    )
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputDom.nativeElement.select();
    }, 1);
  }

  endEditar() {
    this.editando = false;

    if(this.txtInput.invalid) return

    if(this.txtInput.value === this.todo.text) return

    const action = fromTodoActions.editarTodo({id: this.todo.id , text: this.txtInput.value});
    this._store.dispatch(action);
  }

  borrarTodo(){
    const action = fromTodoActions.borrarTodo(this.todo);
    this._store.dispatch(action);
  }
}
