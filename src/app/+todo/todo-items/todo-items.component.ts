import { Component, Input } from '@angular/core';
import { TodoState } from '../shared/reducers/todo.reducer';

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
  @Input() todos: TodoState;
}
