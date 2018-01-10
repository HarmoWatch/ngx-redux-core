import { Component } from '@angular/core';
import { ReduxAction } from '../../../ngx-redux/action/public_api';

@Component({
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {

  @ReduxAction()
  add(todo: string) {
    return todo;
  }

}
