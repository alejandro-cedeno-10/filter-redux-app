import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import * as fromFilterActions from './filter.action';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: fromFilterActions.filterValids): Todo[] {
    switch (filtro.value) {
      case 'completeds':
        return todos.filter((todo) => todo.completed);

      case 'pends':
        return todos.filter((todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
