import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';
import { TodoState } from './todo.module.state';

@ReduxState({name: 'todo'})
export class TodoModuleStateProvider extends ReduxStateProvider<TodoState> {

  getInitialState(): Promise<TodoState> {
    return Promise.resolve({
      items: []
    });
  }

}
