import { ReduxRegistry } from '../registry';
import { ReduxAction } from './action';
import { IReduxReducerAction, ReduxReducer } from './reducer';

export interface SampleState {
  yolo: boolean;
}

class TestActions {

  @ReduxAction()
  public static bar() {
    return {
      hello: 'static bar',
    };
  }

  @ReduxAction()
  public static baz() {
    return Promise.resolve({
      hello: 'baz',
    });
  }

  @ReduxAction()
  public bar() {
    return {
      hello: 'bar',
    };
  }

  @ReduxAction()
  public static someOtherAction2() {
    return {
      foo: 'bar',
    };
  }

  @ReduxAction()
  public static iHaveTwoReducers() {
    return {
      foo: 'ipsum',
    };
  }

  public static undecoratedAction() {
    return {
      hello: 'bar',
    };
  }

}

export class TestReducers {

  public avoidTS6133Errors() {
    TestReducers.privateStatic(null, null);
    this.privateFunc(null, null);
  }

  @ReduxReducer(TestActions.prototype.bar)
  public publicBar(state: SampleState, action: IReduxReducerAction<{ hello: string }>) {
    return state;
  }

  @ReduxReducer([ 'SomeOtherAction1', TestActions.someOtherAction2, TestActions.iHaveTwoReducers ])
  protected protectedFunc(state: SampleState, action: IReduxReducerAction<{ foo: string }>) {
    return state;
  }

  @ReduxReducer(TestActions.bar)
  public static publicStatic(state: SampleState, action: IReduxReducerAction<{ hello: string }>) {
    return state;
  }

  @ReduxReducer(TestActions.baz)
  private static privateStatic(state: SampleState, action: IReduxReducerAction<{ hello: string }>) {
    return state;
  }

  @ReduxReducer('SomeAction')
  private privateFunc(state: SampleState, action: IReduxReducerAction<{ hello: string }>) {
    return state;
  }

  @ReduxReducer(TestActions.iHaveTwoReducers)
  public secondReducer(state: SampleState, action: IReduxReducerAction<{ foo: string }>) {
    return state;
  }

}

describe('Decorator/ReduxReducer', () => {

  it('has registered 1 reducer for TestActions/static/bar', () => {
    const reducers = ReduxRegistry.getReducersByType('TestActions/static/bar');
    expect(reducers.length).toEqual(1);
    expect(reducers[ 0 ]).toEqual(TestReducers.publicStatic);
  });

  it('has registered 1 reducer for TestActions/static/baz', () => {
    const reducers = ReduxRegistry.getReducersByType('TestActions/static/baz');
    expect(reducers.length).toEqual(1);
    expect(reducers[ 0 ]).toEqual(TestReducers[ 'privateStatic' ]);
  });

  it('has registered 1 reducer for SomeAction', () => {
    const reducers = ReduxRegistry.getReducersByType('SomeAction');
    expect(reducers.length).toEqual(1);
    expect(reducers[ 0 ]).toEqual(TestReducers.prototype[ 'privateFunc' ]);
  });

  it('has registered 1 reducer for SomeOtherAction1', () => {
    const reducers = ReduxRegistry.getReducersByType('SomeOtherAction1');
    expect(reducers.length).toEqual(1);
    expect(reducers[ 0 ]).toEqual(TestReducers.prototype[ 'protectedFunc' ]);
  });

  it('has registered 1 reducer for TestActions/static/someOtherAction2', () => {
    const reducers = ReduxRegistry.getReducersByType('TestActions/static/someOtherAction2');
    expect(reducers.length).toEqual(1);
    expect(reducers[ 0 ]).toEqual(TestReducers.prototype[ 'protectedFunc' ]);
  });

  it('has registered 1 reducer for TestActions/bar', () => {
    const reducers = ReduxRegistry.getReducersByType('TestActions/bar');
    expect(reducers.length).toEqual(1);
    expect(reducers[ 0 ]).toEqual(TestReducers.prototype.publicBar);
  });

  it('has registered 2 reducers for TestActions/static/iHaveTwoReducers', () => {
    const reducers = ReduxRegistry.getReducersByType('TestActions/static/iHaveTwoReducers');
    expect(reducers.length).toEqual(2);
    expect(reducers[ 0 ]).toEqual(TestReducers.prototype[ 'protectedFunc' ]);
    expect(reducers[ 1 ]).toEqual(TestReducers.prototype.secondReducer);
  });


  it('throws an exception if target method isn\'t annotated', () => {

    expect(() => {

      class TestCase {

        @ReduxReducer(TestActions.undecoratedAction)
        public publicBar(state: SampleState, action: IReduxReducerAction<{ hello: string }>) {
          return state;
        }

      }

      return new TestCase();

    }).toThrowError('Unable to resolve action type. Make sure you\'ve decorated the target by @ReduxAction');

  });

});
