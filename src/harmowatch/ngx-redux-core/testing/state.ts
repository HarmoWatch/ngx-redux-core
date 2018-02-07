import { ReduxStateProvider } from 'harmowatch/ngx-redux-core/providers/redux-state.provider';
import { ReduxState } from '@harmowatch/ngx-redux-core/decorators';

export interface TestingState {
  todo: {
    isFetching: boolean;
    items: string[];
  };
}

@ReduxState({name: TestingStateProvider.NAME})
export class TestingStateProvider extends ReduxStateProvider<TestingState> {

  public static readonly NAME = 'testing-7c66b613-20bd-4d35-8611-5181ca4a0b72';

  public static readonly INITIAL_STATE: TestingState = {
    todo: {
      isFetching: false,
      items: [ 'Item 1', 'Item 2' ],
    },
  };

  getInitialState(): TestingState {
    return TestingStateProvider.INITIAL_STATE;
  }

}
