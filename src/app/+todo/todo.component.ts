import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../shared/reducers';
import { TodoState } from './shared/reducers/todo.reducer';
import { Todo } from './shared/todo.model';
import { TodoActions } from './shared/actions/todo.action';
import { FilterActions } from './shared/actions/filter.action';
import { TodoInputComponent } from './todo-input';
import { TodoItemsComponent } from './todo-items';
import { SwitcherComponent } from './switcher';
import { StatusBarComponent } from './status-bar';
import { ClearCompletedComponent } from './clear-completed';
import { TodoFilterComponent } from './todo-filter';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  directives: [
    TodoInputComponent,
    TodoItemsComponent,
    SwitcherComponent,
    StatusBarComponent,
    ClearCompletedComponent,
    TodoFilterComponent
  ],
  providers: [TodoActions, FilterActions],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="todoapp">
      <div class="header">
        <h1>todos</h1>
        <!--<started-search></started-search>-->
        <todo-input (todo)="addTodo($event)"></todo-input>
      </div>
      <div class="main">
        <switcher (switchToggle)="onSwitchToggle($event)"></switcher>
        <todo-items 
          [todos]="todos$ | async"
          [filter]="filter$ | async"
          (toggle)="onToggleTodo($event)"
          (remove)="onRemoveTodo($event)"
          (newTodoValue)="onNewTodoValue($event)"
          ></todo-items>
      </div>
      <div class="footer">
        <status-bar [remaining]="remaining"></status-bar>
        <todo-filter [filter]="filter$ | async" (setFilter)="setFilter($event)"></todo-filter>
        <clear-completed (clear)="clearCompleted()"></clear-completed>
      </div>
    </div>
  `,
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  todos$: Observable<TodoState>;
  filter$: Observable<string>;

  remaining: number;

  constructor (
    private store: Store<AppState>,
    private todoActions: TodoActions,
    private filterActions: FilterActions
  ) {
    this.todos$ = store.select(s => s.todos);
    this.filter$ = store.select(s => s.filter);

    this.updateRemaining();
  }

  updateRemaining (): void {
    this.todos$
      .subscribe((todos: TodoState) =>
        this.remaining = todos.filter((todo: Todo) => !todo.completed).length || 0
      );
  }

  /**
   * All state updates are handled through dispatched actions in 'smart'
   * components. This provides a clear, reproducible history of state
   * updates and user interaction through the life of our application.
   */
  addTodo (todo: string) {
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

  clearCompleted () {
    this.store.dispatch(this.todoActions.clearCompleted());
  }

  setFilter (filter: string) {
    this.store.dispatch(this.filterActions.setFilter(filter));
  }
}
