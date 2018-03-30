import { ReduxReducerDecoratorForMethod } from '@harmowatch/redux-decorators';
import { notToMutateTheGivenState } from './not-to-mutate-the-given-state';
import { ReduxActionWithPayload } from '../../../harmowatch/ngx-redux-core/interfaces/redux-action-with-payload.interface';


interface TestState {
  todo: {
    items: string[];
  };
}

class TestReducer {

  @ReduxReducerDecoratorForMethod('foo/123')
  doesMutate(state: TestState, action: ReduxActionWithPayload<string>): TestState {
    state.todo.items.push(action.payload);
    return state;
  }

  @ReduxReducerDecoratorForMethod('bar/456')
  doesNotMutate(state: TestState, action: ReduxActionWithPayload<string>): TestState {
    return {
      ...state,
      todo: {
        ...state.todo,
        items: state.todo.items.concat(action.payload)
      }
    };
  }

}

describe('plugins/karma/matchers', () => {

  describe('notToMutateTheGivenState', () => {

    function testCompare({desc, reducerFunction, willPass, errorMessage = ''}) {

      describe(desc, () => {

        let result;

        beforeEach(() => {

          const state = {
            todo: {
              items: [],
            }
          };

          const action = {
            type: null,
            payload: 'item 123',
          };

          result = notToMutateTheGivenState().compare(reducerFunction, state, action);
        });

        it(willPass ? 'will pass' : 'will fail', () => {
          expect(result.pass).toBe(willPass);
        });

        if (errorMessage.length > 0) {
          it('displays the correct error message', () => {
            expect(result.message).toBe(errorMessage);
          });
        }

      });
    }

    testCompare({
      desc: 'The reducer does not mutate the state',
      willPass: true,
      reducerFunction: TestReducer.prototype.doesNotMutate,
    });

    testCompare({
      desc: 'The reducer does mutate the state',
      willPass: false,
      reducerFunction: TestReducer.prototype.doesMutate,
      errorMessage: [
        'Expected the reducer not to mutate the state, but it mutates the following properties:',
        '- "todo.items"',
      ].join('\n'),
    });

  });

});
