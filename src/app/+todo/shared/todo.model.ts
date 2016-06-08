function guidGenerator () {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}

export class Todo {
  completed: boolean;
  id: string;
  text: string;

  constructor (title: string) {
    this.text = title;
    this.id = guidGenerator();
    this.completed = false;
  }
}
