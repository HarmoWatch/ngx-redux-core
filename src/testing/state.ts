import { ReduxState } from '../state/decorator';
import { ReduxStateInterface } from '../state/interface';

export interface TestingStateInterface {
  todo: {
    items: string[];
  };
}

@ReduxState({
  name: 'testing-7c66b613-20bd-4d35-8611-5181ca4a0b72'
})
export class TestingState implements ReduxStateInterface<TestingStateInterface> {

  public static readonly INITIAL_STATE: TestingStateInterface = {
    todo: {
      items: [ 'Item 1', 'Item 2' ],
    },
  };

  getInitialState(): TestingStateInterface {
    return TestingState.INITIAL_STATE;
  }

}
