import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoState } from '../shared/reducers/todo.reducer';
import { TodoItemComponent } from '../todo-item';
import { Filter } from '../shared/pipes/filter.pipe';
import { Todo } from '../shared/todo.model';

@Component({
  moduleId: module.id,
  selector: 'todo-items',
  directives: [TodoItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  pipes: [Filter],
  template: `
    <ul class="todo-list">
      <li *ngFor="let todo of todos | filter: filter" [ngClass]="{'completed': todo.completed}">
        <todo-item
          [todo]="todo"
          [completed]="todo.completed"
          [isEditing]="isEditing"
          (toggleEditing)="toggleEditing($event)"
          (toggle)="toggle.emit($event)"
          (remove)="remove.emit($event)"
          (newTodoValue)="onTodoEdit($event)"
          >
        </todo-item>
      </li>
    </ul>
  `
})
export class TodoItemsComponent {
  @Input() todos: TodoState;
  @Input() filter: string;
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
