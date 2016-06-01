import { Component } from '@angular/core';
import { TodoComponent } from './+todo';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ngrx-todo-app',
  styleUrls: ['ngrx-todo.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/todo']">Todo</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
@Routes([
  {path: '/todo', component: TodoComponent}
])
export class NgrxTodoAppComponent {
  title = 'ngrx-todo works!';
}
