import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input
      class="toggle-all"
      type="checkbox"
      #toggle
      (click)="switchToggle.emit(toggle.checked)">
    <label for="toggle-all">Mark all as complete</label>
  `
})
export class SwitcherComponent {
  @Output() switchToggle: EventEmitter<boolean> = new EventEmitter();
}
