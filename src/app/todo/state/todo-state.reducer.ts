import { ActionInterface } from '../../../ngx-redux/action/interface';
import { ReduxReducer } from '../../../ngx-redux/public_api';
import { TodoListComponent } from '../list/todo-list.component';
import { TodoState } from './todo-state.provider';

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
