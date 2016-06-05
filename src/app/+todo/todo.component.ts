import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../shared/reducers';
import { TodoActions } from './shared/todo.action';
import { TodoInputComponent } from './todo-input';
import { TodoItemsComponent } from './todo-items';

import 'rxjs/add/operator/let';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  directives: [TodoInputComponent, TodoItemsComponent],
  providers: [TodoActions],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="todoapp">
      <div class="header">
        <h1>todos</h1>
        <todo-input (todo)="addTodo($event)"></todo-input>
      </div>
      <div class="main">
        <todo-items [todos]="todos$ | async"></todo-items>
      </div>
    </div>
  `,
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  todos$: Observable<any>;

  constructor(private store: Store<AppState>, private todoActions: TodoActions) {
    this.todos$ = store.select(s => s.todos);
  }

  addTodo(todo: string) {
    /**
     * All state updates are handled through dispatched actions in 'smart'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our application.
     */
    this.store.dispatch(this.todoActions.addTodo(todo));
  }

}
