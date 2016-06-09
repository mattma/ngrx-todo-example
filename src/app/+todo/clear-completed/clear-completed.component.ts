import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'clear-completed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="clear-completed" (click)="clear.emit()">
      Clear completed
    </button>
  `
})
export class ClearCompletedComponent {
  @Output() clear: EventEmitter<any> = new EventEmitter();
}
