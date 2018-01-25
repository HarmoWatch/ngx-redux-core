import { ActionInterface, ReduxReducer } from '@harmowatch/ngx-redux-core';
import { TodoListComponent } from '../list/todo-list.component';
import { TodoState } from '../todo.module.state';

export class TodoStateReducer {

  @ReduxReducer([
    TodoListComponent.prototype.add,
  ])
  addTodo(state: TodoState, action: ActionInterface<string>): TodoState {
    return {
      ...state,
      items: state.items.concat(action.payload || '- null -'),
    };
  }

}
