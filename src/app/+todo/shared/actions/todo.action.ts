// export const ADD_TODO: string = '[TODO] ADD_TODO';
// export const EDIT_TODO: string = 'EDIT_TODO';
// export const TOGGLE_TODO: string = 'TOGGLE_TODO';
// export const REMOVE_TODO: string = 'REMOVE_TODO';
// export const SET_CURRENT_FILTER: string = 'SET_CURRENT_FILTER';
// export const STARTED_LETTER: string = 'STARTED_LETTER';
// export const COMPLETE_ALL: string = 'COMPLETE_ALL';
// export const CLEAR_COMPLETED: string = 'CLEAR_COMPLETED';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';


/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class TodoActions {
  static ADD_TODO: string = '[TODO] ADD_TODO';
  addTodo(todo: string): Action {
    return {
      type: TodoActions.ADD_TODO,
      payload: todo
    };
  }

  static REMOVE_TODO: string = '[TODO] REMOVE_TODO';
  removeTodo (id: string) {
    return {
      type: TodoActions.REMOVE_TODO,
      payload: id
    };
  }

  static TOGGLE_TODO: string = '[TODO] TOGGLE_TODO';
  toggleTodo (id: string) {
    return {
      type: TodoActions.TOGGLE_TODO,
      payload: id
    };
  }

  static COMPLETE_ALL: string = '[TODO] COMPLETE_ALL';
  toggleAllTodos (isToggle: boolean) {
    return {
      type: TodoActions.COMPLETE_ALL,
      payload: isToggle
    };
  }

  static CLEAR_COMPLETED: string = '[TODO] CLEAR_COMPLETED';
  clearCompleted () {
    return {
      type: TodoActions.CLEAR_COMPLETED
    };
  }

  static EDIT_TODO: string = 'EDIT_TODO';
  static SET_CURRENT_FILTER: string = 'SET_CURRENT_FILTER';
  static STARTED_LETTER: string = 'STARTED_LETTER';
}
