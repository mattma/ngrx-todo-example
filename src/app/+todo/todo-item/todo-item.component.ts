import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view" *ngIf="!isEditing">
      <input
        class="toggle"
        type="checkbox"
        (change)="toggle.emit(todo.id)"
        [checked]="completed"
      />
      <label (dblclick)="toggleEditing.emit(true)">{{todo.text}}</label>
      <button class="destroy" (click)="remove.emit(todo.id)"></button>
    </div>
    <input
      type="text"
      class="edit"
      #editTodo
      [style.display]="isEditing?'block':'none'"
      [value]="todo.text"
      (keyup.enter)="newTodoValue.emit({id: todo.id, text: editTodo.value})"
      />
  `
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() completed: boolean;
  @Input() isEditing: boolean;
  @Output() toggle: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<string> = new EventEmitter();
  @Output() newTodoValue: EventEmitter<string> = new EventEmitter();
  @Output() toggleEditing: EventEmitter<boolean> = new EventEmitter();
}
