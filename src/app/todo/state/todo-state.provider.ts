import { ReduxStateInterface } from '@harmowatch/redux-decorators';
import { ReduxState } from '../../../ngx-redux/public_api';

export interface TodoState {
  items: string[];
}

@ReduxState({name: 'todo'})
export class TodoStateProvider implements ReduxStateInterface<TodoState> {

  getInitialState(): Promise<TodoState> {
    return Promise.resolve({
      items: []
    });
  }

}
