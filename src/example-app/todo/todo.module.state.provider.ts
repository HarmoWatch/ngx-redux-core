import { ReduxState } from '@harmowatch/ngx-redux-core';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';
import { TodoState } from './todo.module.state';

@ReduxState({name: 'todo'})
export class TodoModuleStateProvider extends ReduxStateProvider<TodoState> {

  getInitialState(): Promise<TodoState> {
    return Promise.resolve({
      items: []
    });
  }

}
