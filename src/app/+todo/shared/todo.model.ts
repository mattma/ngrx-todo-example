export class Todo {
  completed: boolean;
  id: string;
  text: string;

  constructor (title: string) {
    this.text = title;
    this.id = '';
    this.completed = false;
  }
}
