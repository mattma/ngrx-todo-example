import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoState } from '../shared/reducers/todo.reducer';
import { TodoItemComponent } from '../todo-item';
import { Todo } from '../shared/todo.model';

@Component({
  moduleId: module.id,
  selector: 'todo-items',
  directives: [TodoItemComponent],
  template: `
    <ul class="todo-list">
      <li *ngFor="let todo of todos">
        <todo-item
          [todo]="todo"
          [isEditing]="isEditing"
          (toggleEditing)="toggleEditing($event)"
          (toggle)="toggle.emit($event)"
          (remove)="remove.emit($event)"
          (newTodoValue)="onTodoEdit($event)"
          >
        </todo-item>
      </li>
    </ul>
  `,
  styles: []
})
export class TodoItemsComponent {
  @Input() todos: TodoState;
  isEditing: boolean;
  @Output() toggle: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<string> = new EventEmitter();
  @Output() newTodoValue: EventEmitter<string> = new EventEmitter();
  // @Output() toggleEditing: EventEmitter<boolean> = new EventEmitter();

  onTodoEdit(newTodo: any): void {
    console.log('newTodo: ', newTodo);
    this.isEditing = false;
    this.newTodoValue.emit(newTodo);
  }

  toggleEditing(isEditing: boolean): void {
    this.isEditing = isEditing;
  }
}
