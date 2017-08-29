import { Store } from 'redux';
import { ReduxRegistry } from '../registry';
import { ReduxAction } from './action';

const payloads = {
  _bar: {iam: '_bat'},
  _barCustomName: {iam: '_barCustomName'},
  _foo: {iam: '_foo'},
  _fooCustomName: {iam: '_fooCustomName'},
  bar: {iam: 'bar'},
  barCustomName: {iam: 'barCustomName'},
  foo: {iam: 'foo'},
  fooCustomName: {iam: 'fooCustomName'},
};

export class TestActions {

  public avoidTS6133Errors() {
    this._foo();
    this._fooCustomName();
    TestActions._bar();
    TestActions._barCustomName();
  }

  @ReduxAction()
  foo() {
    return payloads.foo;
  }

  @ReduxAction('CustomFoo')
  fooCustomName() {
    return payloads.fooCustomName;
  }

  @ReduxAction()
  private _foo() {
    return payloads._foo;
  }

  @ReduxAction('AnotherCustomFoo')
  private _fooCustomName() {
    return payloads._fooCustomName;
  }

  @ReduxAction()
  public static bar() {
    return payloads.bar;
  }

  @ReduxAction('customBar')
  public static barCustomName() {
    return payloads.barCustomName;
  }

  @ReduxAction()
  private static _bar() {
    return payloads._bar;
  }

  @ReduxAction('anotherCustomBar')
  private static _barCustomName() {
    return payloads._barCustomName;
  }

}

describe('Decorator/ReduxAction', () => {

  let dispatch: jasmine.Spy;

  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    spyOn(ReduxRegistry, 'getStore').and.returnValue(Promise.resolve({dispatch} as {} as Store<{}>));
  });

  const testSuite = [ {
    description: 'prototype method',
    expectation: {
      payload: payloads.foo,
      type: 'TestActions/foo',
    },
    method: TestActions.prototype.foo,
  }, {
    description: 'prototype method with custom action type',
    expectation: {
      payload: payloads.fooCustomName,
      type: 'CustomFoo',
    },
    method: TestActions.prototype.fooCustomName,
  }, {
    description: 'private prototype method',
    expectation: {
      payload: payloads._foo,
      type: 'TestActions/_foo',
    },
    method: TestActions.prototype[ '_foo' ],
  }, {
    description: 'private prototype method with custom action type',
    expectation: {
      payload: payloads._fooCustomName,
      type: 'AnotherCustomFoo',
    },
    method: TestActions.prototype[ '_fooCustomName' ],
  }, {
    description: 'static method',
    expectation: {
      payload: payloads.bar,
      type: 'TestActions/bar',
    },
    method: TestActions.bar,
  }, {
    description: 'static method with custom action type',
    expectation: {
      payload: payloads.barCustomName,
      type: 'customBar',
    },
    method: TestActions.barCustomName,
  }, {
    description: 'private static method',
    expectation: {
      payload: payloads._bar,
      type: 'TestActions/_bar',
    },
    method: TestActions[ '_bar' ],
  }, {
    description: 'private static method with custom action type',
    expectation: {
      payload: payloads._barCustomName,
      type: 'anotherCustomBar',
    },
    method: TestActions[ '_barCustomName' ],
  } ];

  testSuite.forEach(testCase => {
    describe(testCase.description, () => {

      it('decorates the method', () => {
        expect(testCase.method[ '__@ReduxAction' ]).toEqual({type: testCase.expectation.type});
      });

      it('returns the payload', () => {
        expect(testCase.method()).toEqual(testCase.expectation.payload);
      });

      it('dispatches the redux action once', (done) => {

        (dispatch as jasmine.Spy).and.callFake(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith({
            payload: testCase.expectation.payload,
            type: testCase.expectation.type,
          });

          done();
        });

        testCase.method();

      });

    });
  });

});
