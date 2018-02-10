import { TodoListItem } from '../list/todo-list-item';
import { TodoListComponent } from '../list/todo-list.component';
import { TodoState } from '../todo.module.state';
import { ReduxReducer } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { ReduxActionWithPayload } from '../../../harmowatch/ngx-redux-core/interfaces/redux-action.interface';

export class TodoStateReducer {

  @ReduxReducer([
    TodoListComponent.prototype.add,
  ])
  addTodo(state: TodoState, action: ReduxActionWithPayload<TodoListItem>): TodoState {
    return {
      ...state,
      items: state.items.concat(action.payload),
    };
  }

  @ReduxReducer([
    TodoListComponent.prototype.remove,
  ])
  removeTodo(state: TodoState, action: ReduxActionWithPayload<TodoListItem>): TodoState {
    return {
      ...state,
      items: state.items.filter(todo => todo.uuid !== action.payload.uuid)
    };
  }

}