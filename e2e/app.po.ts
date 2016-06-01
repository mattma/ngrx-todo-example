export class NgrxTodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngrx-todo-app h1')).getText();
  }
}
