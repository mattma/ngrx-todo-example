import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Filter } from './filter.pipe';

describe('Filter Pipe', () => {
  beforeEachProviders(() => [Filter]);

  // it('should transform the input', inject([Filter], (pipe: Filter) => {
  //     expect(pipe.transform(true)).toBe(null);
  // }));
});
