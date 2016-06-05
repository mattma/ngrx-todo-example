import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { TodoService } from '../shared/todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-input',
  template: `
    <input 
      class="new-todo" autofocus #todo
      placeholder="What needs to be done?"
      (keyup.enter)="addTodo(todo)"
      />
  `
})
export class TodoInputComponent {
  @Output() todo: EventEmitter<string> = new EventEmitter();

  addTodo (todo): void {
    const todoValue = todo.value.trim();

    if (todoValue.length > 0) {
      this.todo.emit(todoValue);
      todo.value = '';
    }
  }
}
