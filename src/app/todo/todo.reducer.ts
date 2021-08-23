import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as fromTodoActions from './todo.actions';

const todo1 = new Todo('Programar en Vue.js');
const todo2 = new Todo('Programar en Angular.js');

const stateInit: Todo[] = [todo1, todo2];

export const todoReducer = createReducer(
    stateInit,

  on(fromTodoActions.addTodo, (state, { text }) => {
    const todo = new Todo(text);
    return [...state, todo];
  }),

  on(fromTodoActions.toogleTodo, (state, { id }) => {
    return state.map(todoEdit =>{
        if(todoEdit.id === id){
            return {
                ...todoEdit,
                completed: !todoEdit.completed
            };
        }else{
            return todoEdit
        }
    } );
  })
  ,

  on(fromTodoActions.editarTodo, (state, { id, text }) => {
    return state.map(todoEdit =>{
        if(todoEdit.id === id){
            return {
                ...todoEdit,
                text: text
            };
        }else{
            return todoEdit
        }
    } );
  }),

  on(fromTodoActions.borrarTodo, (state, { id }) => {
    return state.filter( todoEdit => todoEdit.id !== id )
  }),

  on(fromTodoActions.toogleAllTodo, (state, { completed }) => {
    return state.map(todoEdit =>{
        return{
            ...todoEdit,
            completed: completed
        }
    })
  }),
  on(fromTodoActions.deleteAllTodo, (state) => {
    return state.filter( todoEdit => !todoEdit.completed )
  })

);

/* export function todoReducer(state = stateInit, action: fromTodo.Actions): Todo[] {

    switch(action.type){

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.text!);
            return [ ...state, todo ];

        default:
            return state;
    }
} */
