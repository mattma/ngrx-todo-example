import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-input',
  template: `
    <input 
      class="new-todo" autofocus #todo
      placeholder="What needs to be done?"
      (keyup.enter)="addTodo(todo)"
      />
  `,
  styles: []
})
export class TodoInputComponent {
  addTodo (todo) {
    console.log('todo: ', todo);
  }
}
