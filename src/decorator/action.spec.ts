import { Store } from 'redux';
import { ReduxRegistry } from '../registry';
import { ReduxAction } from './action';

const payloads = {
  _bar: {iam: '_bat'},
  _foo: {iam: '_foo'},
  bar: {iam: 'bar'},
  foo: {iam: 'foo'},
};

class Sample {

  public avoidTS6133Errors() {
    this._foo();
    Sample._bar();
  }

  @ReduxAction()
  foo() {
    return payloads.foo;
  }

  @ReduxAction()
  private _foo() {
    return payloads._foo;
  }

  @ReduxAction()
  public static bar() {
    return payloads.bar;
  }

  @ReduxAction()
  private static _bar() {
    return payloads._bar;
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
      type: 'Sample/foo',
    },
    method: Sample.prototype.foo,
  }, {
    description: 'private prototype method',
    expectation: {
      payload: payloads._foo,
      type: 'Sample/_foo',
    },
    method: Sample.prototype[ '_foo' ],
  }, {
    description: 'static method',
    expectation: {
      payload: payloads.bar,
      type: 'Sample/bar',
    },
    method: Sample.bar,
  }, {
    description: 'private static method',
    expectation: {
      payload: payloads._bar,
      type: 'Sample/_bar',
    },
    method: Sample[ '_bar' ],
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
