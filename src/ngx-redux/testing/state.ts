import { ReduxState } from '../state/decorator';
import { ReduxStateProvider } from '../state/provider';

export interface TestingState {
  todo: {
    isFetching: boolean;
    items: string[];
  };
}

@ReduxState({name: TestingStateProvider.NAME})
export class TestingStateProvider implements ReduxStateProvider<TestingState> {

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
