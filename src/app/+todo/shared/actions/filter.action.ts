import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class FilterActions {
  static CURRENT_FILTER: string = '[FILTER] CURRENT_FILTER';
  setFilter (filter: string): Action {
    return {
      type: FilterActions.CURRENT_FILTER,
      payload: filter
    };
  }
}