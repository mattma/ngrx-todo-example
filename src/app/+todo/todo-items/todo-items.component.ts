import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-items',
  template: `
    <ul class="todo-list">
      <li *ngFor="let todo of todos">
        {{todo}}
      </li>
    </ul>
  `,
  styles: []
})
export class TodoItemsComponent {
  todos: Array<any>;

  constructor() {
    this.todos = [];
  }
}
