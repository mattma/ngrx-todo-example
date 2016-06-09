import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ClearCompletedComponent } from './clear-completed.component';

describe('Component: ClearCompleted', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ClearCompletedComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ClearCompletedComponent],
      (component: ClearCompletedComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ClearCompletedComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ClearCompletedComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <clear-completed></clear-completed>
  `,
  directives: [ClearCompletedComponent]
})
class ClearCompletedComponentTestController {
}

