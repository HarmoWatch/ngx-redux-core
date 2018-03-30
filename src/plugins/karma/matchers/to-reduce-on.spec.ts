import { ReduxActionDecoratorForMethod, ReduxReducerDecoratorForMethod } from '@harmowatch/redux-decorators';
import { toReduceOn } from './to-reduce-on';

class TestAction {

  @ReduxActionDecoratorForMethod()
  foo() {
  }

}

class TestReducer {

  @ReduxReducerDecoratorForMethod('foo/123')
  @ReduxReducerDecoratorForMethod(TestAction.prototype.foo)
  reduceFoo<T>(state: T): T {
    return state;
  }

}

describe('plugins/karma/matchers', () => {

  describe('toReduceOn', () => {

    function testCompare({desc, reducerFunction, actions, willPass, errorMessage = ''}) {

      describe(desc, () => {

        let result;
        beforeEach(() => result = toReduceOn().compare.apply(null, [ reducerFunction ].concat(actions)));

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
      desc: 'The reducer listens to all actions, in the specified order',
      willPass: true,
      reducerFunction: TestReducer.prototype.reduceFoo,
      actions: [
        'foo/123',
        TestAction.prototype.foo,
      ]
    });

    testCompare({
      desc: 'The reducer listens to all actions, in a different order',
      willPass: true,
      reducerFunction: TestReducer.prototype.reduceFoo,
      actions: [
        TestAction.prototype.foo,
        'foo/123',
      ]
    });

    testCompare({
      desc: 'The reducer listens to more actions than specified',
      willPass: true,
      reducerFunction: TestReducer.prototype.reduceFoo,
      actions: [
        'foo/123',
      ]
    });

    testCompare({
      desc: 'The reducer does not listen to the given action',
      errorMessage: 'Expected the reducer to listen for action "bar/456", but it doesn\'t!',
      willPass: false,
      reducerFunction: TestReducer.prototype.reduceFoo,
      actions: [
        'bar/456',
      ],
    });

    testCompare({
      desc: 'The reducer does not listen to one of the specified actions',
      willPass: false,
      reducerFunction: TestReducer.prototype.reduceFoo,
      actions: [ 'foo/123', 'bar/456' ],
      errorMessage: [
        'Expected the reducer to listen for the actions:',
        '- "foo/123"',
        '- "bar/456"',
        '',
        'But it did not listen to:',
        '- "bar/456"',
      ].join('\n'),
    });

    testCompare({
      desc: 'The reducer does not listen to any of the specified actions',
      willPass: false,
      reducerFunction: TestReducer.prototype.reduceFoo,
      actions: [ 'bar/123', 'bar/456' ],
      errorMessage: [
        'Expected the reducer to listen for the actions:',
        '- "bar/123"',
        '- "bar/456"',
        '',
        'But it did not listen to:',
        '- "bar/123"',
        '- "bar/456"',
      ].join('\n'),
    });

  });

});

