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

    case TodoActions.TOGGLE_TODO:
      return state.map((todo: Todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

    case TodoActions.COMPLETE_ALL:
      return state.map((todo: Todo) => {
        if (todo.completed !== action.payload) {
          todo.completed = action.payload;
        }
        return todo;
      });

    case TodoActions.CLEAR_COMPLETED:
      return state.filter((todo: Todo) => !todo.completed);

    default:
      return state;
  }
};
