import { Component } from '@angular/core';

import { v4 } from 'uuid';
import { TodoModuleStateProvider } from '../todo.module.state.provider';
import { TodoListItem } from './todo-list-item';
import { ReduxAction, ReduxActionContext } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { ReduxSelect } from '../../../harmowatch/ngx-redux-core/decorators/redux-select.decorator';
import { ReduxSelector } from '../../../harmowatch/ngx-redux-core/redux-selector';

@Component({
  templateUrl: './todo-list.component.html',
})
@ReduxActionContext({prefix: 'TodoListComponent://'})
export class TodoListComponent {

  @ReduxSelect('', TodoModuleStateProvider)
  public state: ReduxSelector<{}>;

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
