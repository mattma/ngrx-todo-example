import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="filters">
      <li *ngFor="let f of filters">
        <a [ngClass]="{
          'selected': filter === f.filter, 
          'inactive': filter !== f.filter
        }"
          (click)="setFilter.emit(f.filter)">
          {{f.text}}
        </a>
      </li>
    </ul>
  `
})
export class TodoFilterComponent {
  @Input() filter: string;
  @Output() setFilter: EventEmitter<string> = new EventEmitter();
  filters: Array<any>;

  constructor () {
    this.filters = [
      { filter: 'SHOW_ALL', text: 'All' },
      { filter: 'SHOW_ACTIVE', text: 'Active' },
      { filter: 'SHOW_COMPLETED', text: 'Completed' }
    ];
  }
}
