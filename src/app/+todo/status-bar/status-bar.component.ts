import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'status-bar',
  template: `
    <span class="todo-count">
      {{remaining}} {{remaining > 1 ? 'items' : 'item'}} left
    </span>
  `,
  styles: []
})
export class StatusBarComponent {
  @Input() remaining: number;
}
