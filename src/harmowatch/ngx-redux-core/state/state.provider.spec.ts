import { async, TestBed } from '@angular/core/testing';
import {
  ActionWithPayload, ReduxAction, ReduxReducer, ReduxState,
  ReduxTestingStore, ReduxStateProvider, ReduxTestingModule,
} from '../index';
import { ReduxStateDecorator } from '@harmowatch/redux-decorators';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

describe('ReduxStateProvider', () => {

  describe('exceptions', () => {

    describe('getInitialState() is NOT implemented', () => {

      it('throws an exception', () => {

        class TestSubject extends ReduxStateProvider<{}> {

          constructor() {
            spyOn(ReduxStateDecorator, 'get').and.returnValue({
              name: 'some-name',
            });
            super([ {
              provider: null,
              reducers: [],
            } ]);
          }

        }

        expect(new TestSubject().getInitialState).toThrowError('Method "getInitialState" not implemented.');

      });

    });

    describe('the class is not registered to the redux module', () => {

      @ReduxState({name: 'registered-state'})
      class RegisteredStateProvider extends ReduxStateProvider<{}> {

      }

      @ReduxState({name: 'unregistered-state'})
      class UnregisteredStateProvider extends ReduxStateProvider<{}> {

      }

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            ReduxTestingModule.forRoot({
              state: {
                provider: RegisteredStateProvider,
              }
            }),
          ],
          providers: [
            RegisteredStateProvider,
            UnregisteredStateProvider,
          ]
        });
      }));

      it('throws an exception', () => {
        expect(() => TestBed.get(UnregisteredStateProvider)).toThrowError(
          'Unable to resolve state definition! Make sure you\'ve registered the provider to ReduxModule!'
        );
      });

    });

    describe('the class is not decorated by "@ReduxState"', () => {

      class TestSubject extends ReduxStateProvider<{}> {

      }

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            ReduxTestingModule.forRoot({
              state: {
                provider: TestSubject,
              }
            }),
          ],
          providers: [
            TestSubject,
          ]
        });
      }));

      it('throws an exception', () => {
        expect(() => TestBed.get(TestSubject))
          .toThrowError('Unable to resolve state name! Make sure you\'ve decorated the provider by "@ReduxState"!');
      });

    });

  });

  describe('a well configured state provider ', () => {

    @ReduxState({name: 'test-state'})
    class TestSubject extends ReduxStateProvider<{}> {

      getInitialState(): {} {
        return {};
      }

    }

    class TestActions {

      @ReduxAction()
      public setFoo(foo: string): string {
        return foo;
      }

    }

    class TestReducer {

      public static spy = jasmine.createSpy('TestReducer.spy').and.callFake((_, s, action) => {
        return {
          ...s,
          foo: 'touched by TestReducer',
        };
      });

      constructor() {
        TestReducer.spy.calls.reset();
      }

      @ReduxReducer('setFoo')
      public setFoo(state: {}, action: ActionWithPayload<string>): {} {
        // make sure "this" is binded
        expect(this instanceof TestReducer).toBeTruthy();
        return TestReducer.spy('setFoo', state, action);
      }

      @ReduxReducer('clearFoo')
      public clearFoo(state: {}, action: ActionWithPayload<string>): {} {
        // make sure "this" is binded
        expect(this instanceof TestReducer).toBeTruthy();
        return TestReducer.spy('clearFoo', state, action);
      }

    }

    class SomeOtherReducer {

      public static spy = jasmine.createSpy('SomeOtherReducer.spy').and.callFake((_, s, action) => {
        return {
          ...s,
          foo: 'touched by SomeOtherReducer',
        };
      });

      constructor() {
        SomeOtherReducer.spy.calls.reset();
      }

      @ReduxReducer([ TestActions.prototype.setFoo, 'some-other-event' ])
      public setFoo(state: {}, action: ActionWithPayload<string>): {} {
        return SomeOtherReducer.spy('setFoo', state, action);
      }

    }

    class ThirdReducer {

      public static spy = jasmine.createSpy('ThirdReducer.spy').and.callFake((_, s, action) => {
        return {
          ...s,
          foo: 'touched by ThirdReducer',
        };
      });

      constructor() {
        ThirdReducer.spy.calls.reset();
      }

      @ReduxReducer(TestActions.prototype.setFoo)
      public setFoo(state: {}, action: ActionWithPayload<string>): {} {
        return ThirdReducer.spy('setFoo', state, action);
      }

    }

    let fixture: TestSubject;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          ReduxTestingModule.forRoot({
            state: {
              provider: TestSubject,
              reducers: [ TestReducer, SomeOtherReducer, ThirdReducer ],
            }
          }),
        ],
        providers: [
          TestSubject,
        ]
      });

      fixture = TestBed.get(TestSubject);
      TestBed.get(ReduxTestingStore).setState(TestSubject, {foo: 'bar'});
    }));

    describe('select()', () => {

      const fooValues: string[] = [];

      beforeEach(async(() => {
        const selector = fixture.select<string>('foo');
        selector.subscribe(foo => fooValues.push(foo));

        selector
          .take(1)
          .toPromise()
          .then(() => TestBed.get(ReduxTestingStore).setState(TestSubject, {foo: 'baz'}));

      }));

      it('selects the correct value', () => {
        expect(fooValues).toEqual([ 'bar', 'baz' ]);
      });

      it('returns the same instance of ReduxSelector, if the same selector is given', () => {
        expect(fixture.select<string>('foo')).toBe(fixture.select<string>('foo'));
      });

      it('returns a new instance of ReduxSelector, if another same selector is given', () => {
        expect(fixture.select<string>('foo')).not.toBe(fixture.select<string>('fuz'));
      });

    });

  });

});

