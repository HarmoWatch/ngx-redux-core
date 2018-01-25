import { Component } from '@angular/core';
import { ReduxAction } from '@harmowatch/ngx-redux-core';

@Component({
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {

  @ReduxAction()
  add(todo: string) {
    return todo;
  }

}
