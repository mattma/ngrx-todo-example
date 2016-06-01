import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  template: `
    <p>
      todo Works!
    </p>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
