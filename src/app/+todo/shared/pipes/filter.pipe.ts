import { Pipe, PipeTransform } from '@angular/core';
import { TodoState } from '../reducers/todo.reducer';
import { Todo } from '../todo.model';

@Pipe({
  name: 'filter'
})
export class Filter implements PipeTransform {
  transform (todos: TodoState, filter: string): TodoState {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter((todo: Todo) => !todo.completed);

      case 'SHOW_COMPLETED':
        return todos.filter((todo: Todo) => todo.completed);

      case 'SHOW_ALL':
      default:
        return todos;
    }
  }
}
