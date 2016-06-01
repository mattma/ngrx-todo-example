import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgrxTodoAppComponent } from '../app/ngrx-todo.component';

beforeEachProviders(() => [NgrxTodoAppComponent]);

describe('App: NgrxTodo', () => {
  it('should create the app',
      inject([NgrxTodoAppComponent], (app: NgrxTodoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngrx-todo works!\'',
      inject([NgrxTodoAppComponent], (app: NgrxTodoAppComponent) => {
    expect(app.title).toEqual('ngrx-todo works!');
  }));
});
