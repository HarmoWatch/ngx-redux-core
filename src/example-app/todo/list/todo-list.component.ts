import { Component } from '@angular/core';
import { ReduxAction, ReduxActionContext, ReduxSelect } from '@harmowatch/ngx-redux-core';
import { Observable } from 'rxjs/Observable';
import { v4 } from 'uuid';
import { TodoModuleStateProvider } from '../todo.module.state.provider';
import { TodoListItem } from './todo-list-item';

@Component({
  templateUrl: './todo-list.component.html',
})
@ReduxActionContext({prefix: 'TodoListComponent://'})
export class TodoListComponent {

  @ReduxSelect('', TodoModuleStateProvider)
  public state: Observable<{}>;

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
