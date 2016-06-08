import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../shared/reducers';
import {TodoState} from './shared/reducers/todo.reducer';
import { TodoActions } from './shared/todo.action';
import { TodoInputComponent } from './todo-input';
import { TodoItemsComponent } from './todo-items';
import { SwitcherComponent } from './switcher';
import { StatusBarComponent } from './status-bar';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  directives: [
    TodoInputComponent,
    TodoItemsComponent,
    SwitcherComponent,
    StatusBarComponent
  ],
  providers: [TodoActions],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="todoapp">
      <div class="header">
        <h1>todos</h1>
        <todo-input (todo)="addTodo($event)"></todo-input>
      </div>
      <div class="main">
        <switcher (switchToggle)="onSwitchToggle($event)"></switcher>
        <todo-items 
          [todos]="todos$ | async"
          (toggle)="onToggleTodo($event)"
          (remove)="onRemoveTodo($event)"
          (newTodoValue)="onNewTodoValue($event)"
          ></todo-items>
      </div>
      <div class="footer">
        <status-bar [remaining]="remaining"></status-bar>
        <!--<filters></filters>-->
        <!--<clear-completed></clear-completed>-->
      </div>
    </div>
  `,
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  todos$: Observable<any>;

  constructor (private store: Store<AppState>, private todoActions: TodoActions) {
    this.todos$ = store.select(s => s.todos);
  }

  get remaining (): number {
    return 0;
    // this.todos$
    //   .subscribe(todos => {
    //     return todos.filter(todo => !todo.completed).length;
    //   });
  }

  addTodo (todo: string) {
    /**
     * All state updates are handled through dispatched actions in 'smart'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our application.
     */
    this.store.dispatch(this.todoActions.addTodo(todo));
  }

  onToggleTodo (id: string) {
    this.store.dispatch(this.todoActions.toggleTodo(id));
  }

  onRemoveTodo (id: string) {
    this.store.dispatch(this.todoActions.removeTodo(id));
  }

  onNewTodoValue (todo: any) {

  }

  onSwitchToggle (isToggle: boolean) {
    this.store.dispatch(this.todoActions.toggleAllTodos(isToggle));
  }
}
