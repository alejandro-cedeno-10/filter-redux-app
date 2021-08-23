import { Action, createAction, props } from '@ngrx/store';

/* export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toogle todo';
 */
/* export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor(public text?: string){

    }
}
export class ToogleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
   constructor( public id?: number){

   }
}  */

export const addTodo = createAction('[TODO] Agregar todo', props<{ text: string }>());
export const toogleTodo = createAction('[TODO] Toogle todo', props<{ id: number }>());
export const editarTodo = createAction('[TODO] Editar todo', props<{ id: number, text: string }>());
export const borrarTodo = createAction('[TODO] Borrar todo', props<{ id: number}>());
export const toogleAllTodo = createAction('[TODO] Selection All todo', props<{ completed: boolean}>());
export const deleteAllTodo = createAction('[TODO] Delete All todo');



/* export type Actions = AgregarTodoAction | ToogleTodoAction; */
