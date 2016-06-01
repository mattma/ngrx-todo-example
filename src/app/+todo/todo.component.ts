import { Component, OnInit } from '@angular/core';
import {TodoInputComponent} from './todo-input';
import {TodoItemsComponent} from './todo-items';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  directives: [TodoInputComponent, TodoItemsComponent],
  template: `
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <todo-input></todo-input>
      </header>
      <section class="main">
        <todo-items></todo-items>
      </section>
    </section>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
