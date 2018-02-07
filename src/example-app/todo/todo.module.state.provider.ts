import { TodoState } from './todo.module.state';
import { ReduxState } from '../../harmowatch/ngx-redux-core/decorators/index';
import { ReduxStateProvider } from '../../harmowatch/ngx-redux-core/providers/redux-state.provider';

@ReduxState({name: 'todo'})
export class TodoModuleStateProvider extends ReduxStateProvider<TodoState> {

  getInitialState(): Promise<TodoState> {
    return Promise.resolve({
      items: []
    });
  }

}
