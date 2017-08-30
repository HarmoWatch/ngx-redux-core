import { Store } from 'redux';
import { ReduxRegistry } from '../registry';
import { ReduxAction } from './action';

export class TestActions {

  public static payloadSpy = jasmine.createSpy('payload');

  public avoidTS6133Errors() {
    this._foo();
    this._fooCustomName();
    TestActions._bar();
    TestActions._barCustomName();
  }

  @ReduxAction()
  public foo() {
    return TestActions.payloadSpy();
  }

  @ReduxAction('CustomFoo')
  public fooCustomName() {
    return TestActions.payloadSpy();
  }

  @ReduxAction()
  private _foo() {
    return TestActions.payloadSpy();
  }

  @ReduxAction('AnotherCustomFoo')
  private _fooCustomName() {
    return TestActions.payloadSpy();
  }

  @ReduxAction()
  public static bar() {
    return TestActions.payloadSpy();
  }

  @ReduxAction('customBar')
  public static barCustomName() {
    return TestActions.payloadSpy();
  }

  @ReduxAction()
  private static _bar() {
    return TestActions.payloadSpy();
  }

  @ReduxAction('anotherCustomBar')
  private static _barCustomName() {
    return TestActions.payloadSpy();
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
    method: TestActions.prototype.foo,
    type: 'TestActions.foo',
  }, {
    description: 'prototype method with custom action type',
    method: TestActions.prototype.fooCustomName,
    type: 'CustomFoo',
  }, {
    description: 'private prototype method',
    method: TestActions.prototype[ '_foo' ],
    type: 'TestActions._foo',
  }, {
    description: 'private prototype method with custom action type',
    method: TestActions.prototype[ '_fooCustomName' ],
    type: 'AnotherCustomFoo',
  }, {
    description: 'static method',
    method: TestActions.bar,
    type: 'TestActions::bar',
  }, {
    description: 'static method with custom action type',
    method: TestActions.barCustomName,
    type: 'customBar',
  }, {
    description: 'private static method',
    method: TestActions[ '_bar' ],
    type: 'TestActions::_bar',
  }, {
    description: 'private static method with custom action type',
    method: TestActions[ '_barCustomName' ],
    type: 'anotherCustomBar',
  } ];

  testSuite.forEach(testCase => {
    describe(testCase.description, () => {

      it('decorates the method', () => {
        expect(testCase.method[ '__@ReduxAction' ]).toEqual({type: testCase.type});
      });

      it('dispatches the redux action once', (done) => {
        (dispatch as jasmine.Spy).and.callFake((action) => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(action.type).toEqual(testCase.type);
          done();
        });

        testCase.method();
      });

      describe('payload', () => {

        let expectedPayload: {};

        beforeEach(() => {
          expectedPayload = {some: 'payload'};
        });

        it('can be a primitive', (done) => {
          TestActions.payloadSpy.and.returnValue(expectedPayload);

          (dispatch as jasmine.Spy).and.callFake((action) => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(action.payload).toEqual(expectedPayload);
            done();
          });

          testCase.method();
        });

        it('can be a promise', (done) => {
          TestActions.payloadSpy.and.returnValue(Promise.resolve(expectedPayload));

          (dispatch as jasmine.Spy).and.callFake((action) => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(action.payload).toEqual(expectedPayload);
            done();
          });

          testCase.method();
        });

      });

    });
  });

});
