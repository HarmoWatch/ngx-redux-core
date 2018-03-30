import { ReduxActionDecoratorForMethod, ReduxReducerDecoratorForMethod } from '@harmowatch/redux-decorators';
import { toDispatchAction } from './to-dispatch-action';

class TestAction {

  @ReduxActionDecoratorForMethod()
  foo() {
  }

  bar() {

  }

}

describe('plugins/karma/matchers', () => {

  describe('toDispatchAction', () => {

    function testCompare({desc, actionFunction, expectedAction = '', willPass, errorMessage = ''}) {

      describe(desc, () => {

        let result;
        beforeEach(() => {
          if (expectedAction.length > 0) {
            result = toDispatchAction().compare(actionFunction, expectedAction);
          } else {
            result = toDispatchAction().compare(actionFunction);
          }
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
      desc: 'Expect that the method dispatch the action "foo", and it does',
      willPass: true,
      actionFunction: TestAction.prototype.foo,
      expectedAction: 'foo'
    });

    testCompare({
      desc: 'Expect that the method dispatch some action, and it does',
      willPass: true,
      actionFunction: TestAction.prototype.foo,
    });

    testCompare({
      desc: 'Expect that the method dispatch some action, but it doesn\'t',
      willPass: false,
      actionFunction: TestAction.prototype.bar,
      errorMessage: 'Expected to dispatch some action, but the method will not dispatch any action!',
    });

    testCompare({
      desc: 'Expect that the method dispatch the action "foo", but it doesn\'t',
      willPass: false,
      actionFunction: TestAction.prototype.bar,
      expectedAction: 'foo',
      errorMessage: 'Expected to dispatch action "foo", but the method will not dispatch any action!',
    });

    testCompare({
      desc: 'Expect that the method dispatch the action "bar", but it dispatched action "foo"',
      willPass: false,
      actionFunction: TestAction.prototype.foo,
      expectedAction: 'bar',
      errorMessage: 'Expected to dispatch action "bar", but it dispatches the action "foo"!',
    });

  });

});

