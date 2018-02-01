import { v4 } from 'uuid';
import { Component } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core';
import { TodoListItem } from './todo-list-item';

@Component({
  templateUrl: './todo-list.component.html',
})
@ReduxActionContext({prefix: 'TodoListComponent://'})
export class TodoListComponent {

  @ReduxAction()
  add(label: string): TodoListItem {
    return {
      uuid: v4(),
      label,
      creationDate: new Date().toISOString(),
    };
  }

  @ReduxAction()
  remove(todo: TodoListItem) {
    return todo;
  }

}
