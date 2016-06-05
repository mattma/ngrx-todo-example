import { Injectable } from '@angular/core';
import { Dispatcher } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

// import * as type from './todo.action';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private addNewTodo$: Subject<any> = new Subject();

  constructor (private dispatcher: Dispatcher) {
    this.addNewTodo$
      // .map((todo: Todo) => ({ type: type.ADD_TODO, payload: todo }))
      .subscribe(dispatcher);
  }

  addTodo (todoValue: string): void {
    this.addNewTodo$.next(new Todo(todoValue));
  }
}