import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../shared/reducers';
import { TodoActions } from '../actions/todo.action';
import { Todo } from '../todo.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class BookEffects {
  constructor(private updates$: StateUpdates<AppState>) { }

    // .map(query => console.log('query: ', query))
    // .switchMap(query => this.googleBooks.searchBooks(query)
    //   .map(books => this.bookActions.searchComplete(books))
    //   .catch(() => Observable.of(this.bookActions.searchComplete([])))
    // );
  /**
   * Effects offer a way to isolate and easily test side-effects within your
   * application. StateUpdates is an observable of the latest state and
   * dispatched action. The `toPayload` helper function returns just
   * the payload of the currently dispatched action, useful in
   * instances where the current state is not necessary.
   *
   * If you are unfamiliar with the operators being used in these examples, please
   * check out the sources below:
   *
   * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
   * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
   */
  @Effect() toggleTodo$ = this.updates$
    .whenAction(TodoActions.TOGGLE_TODO)
    .map<string>(toPayload)
    .do(query => console.log('query: ', query));
}
