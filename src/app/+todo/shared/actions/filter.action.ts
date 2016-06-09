import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class FilterActions {
  static SHOW_ALL: string = '[FILTER] SHOW_ALL';
  showAll (): Action {
    return {
      type: FilterActions.SHOW_ALL
    };
  }

  static SHOW_ACTIVE: string = '[FILTER] SHOW_ACTIVE';
  showActive (): Action {
    return {
      type: FilterActions.SHOW_ACTIVE
    };
  }

  static SHOW_COMPLETED: string = '[FILTER] SHOW_COMPLETED';
  showCompleted (): Action {
    return {
      type: FilterActions.SHOW_COMPLETED
    };
  }
}