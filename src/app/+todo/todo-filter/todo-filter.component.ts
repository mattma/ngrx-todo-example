import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="filters">
      <li *ngFor="let f of filters">
        <a [ngClass]="{'selected': active, 'inactive': !active}"
          (click)="setFilter.emit()">
          {{f.text}}
        </a>
      </li>
    </ul>
  `
})
export class TodoFilterComponent {
  @Input() filter: string;
  @Output() setFilter: EventEmitter<string> = new EventEmitter();
  active: boolean;
  filters: Array<any>;

  constructor () {
    this.filters = [
      { filter: 'SHOW_ALL', text: 'All' },
      { filter: 'SHOW_ACTIVE', text: 'Active' },
      { filter: 'SHOW_COMPLETED', text: 'Completed' }
    ];
  }
}
