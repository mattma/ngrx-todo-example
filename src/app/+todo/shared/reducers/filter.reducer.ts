import { Action } from '@ngrx/store';
import { FilterActions } from '../actions/filter.action';

const initialValue: string = "SHOW_ALL";

export const filterReducer = (state: string = initialValue, action: Action): string => {
  switch (action.type) {
    case FilterActions.CURRENT_FILTER:
      return action.payload;

    default:
      return state;
  }
};
