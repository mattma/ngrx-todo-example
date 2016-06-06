import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';
import { TodoActions } from '../todo.action';

export interface TodoState extends Array<Todo> {};

const initialValue: TodoState = [];

export const todoReducer = (state: TodoState = initialValue, action: Action): TodoState => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, new Todo(action.payload)];

    case TodoActions.REMOVE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
