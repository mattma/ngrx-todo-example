import { Action } from '@ngrx/store';
import { FilterActions } from '../actions/filter.action';

const initialValue: string = "SHOW_ALL";

export const filterReducer = (state: string = initialValue, action: Action): string => {
  switch (action.type) {
    case FilterActions.SHOW_ALL:
      return state;

    default:
      return state;
  }
};
