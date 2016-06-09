import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="todo-count">
      {{remaining}} {{remaining > 1 ? 'items' : 'item'}} left
    </span>
  `
})
export class StatusBarComponent {
  @Input() remaining: number;
}
