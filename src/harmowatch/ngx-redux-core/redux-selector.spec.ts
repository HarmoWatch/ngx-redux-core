import { async, TestBed } from '@angular/core/testing';
import { ReduxRegistry } from './providers/redux-registry';
import { Observable } from 'rxjs/Observable';
import { ReduxSelector } from './redux-selector';
import { TestingState, TestingStateProvider } from './testing/state';
import { ReduxTestingStore } from './testing/store';
import { ReduxModule } from './redux.module';
import { ReduxStore } from './tokens/redux-store.token';
import { ReduxRootState } from './interfaces/redux-root-state.interface';

describe('ReduxSelector', () => {

  let store: ReduxTestingStore;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        ReduxModule.forRoot({
          storeFactory: ReduxTestingStore.factory,
        }),
      ],
    });

    store = TestBed.get(ReduxStore);
    store.setState(TestingStateProvider, TestingStateProvider.INITIAL_STATE);
  }));

  it('can handle falsy values', done => {
    new ReduxSelector('todo/isFetching', TestingStateProvider).subscribe(isFetching => {
      expect(isFetching).toBe(false);
      done();
    });
  });

  it('can handle invalid selectors', done => {
    new ReduxSelector('im/a/invalid/selector', TestingStateProvider).subscribe(value => {
      expect(value).toBe(null);
      done();
    });
  });

  describe('instantiation without parameter', () => {

    let selector: Observable<ReduxRootState>;

    beforeEach(() => {
      selector = new ReduxSelector();
    });

    it('selects the root state', done => {
      selector.subscribe(selectedState => {
        const expectedState: ReduxRootState = {
          [ TestingStateProvider.NAME ]: TestingStateProvider.INITIAL_STATE,
        };

        expect(selectedState).toEqual(expectedState);
        done();
      });
    });

  });

  describe('instantiation with a relative selector, but no state provider reference was given', () => {

    it('throws an exception', () => {
      expect(function () {
        new ReduxSelector('').subscribe();
      }).toThrowError('You need to provide a state provider, if you use relative selectors');
    });

  });

  describe('instantiation with a relative selector and a state provider reference', () => {

    let selector: Observable<string[]>;

    beforeEach(() => {
      selector = new ReduxSelector('todo/items', TestingStateProvider);
    });

    it('selects the testing state', done => {
      selector.subscribe(todoItems => {
        expect(todoItems).toEqual(TestingStateProvider.INITIAL_STATE.todo.items);
        done();
      });
    });

    it('is updated when the state changes', done => {

      const state1: TestingState = {
        ...TestingStateProvider.INITIAL_STATE,
        todo: {
          ...TestingStateProvider.INITIAL_STATE.todo,
          items: []
        }
      };

      const state2: TestingState = {
        ...TestingStateProvider.INITIAL_STATE,
        todo: {
          ...TestingStateProvider.INITIAL_STATE.todo,
          items: [ 'It works' ]
        }
      };

      const expectedSequence: string[][] = [
        [],
        state1.todo.items,
        state2.todo.items,
      ];

      const givenSequence: string[][] = [];
      selector.subscribe(todoItems => givenSequence.push(todoItems));

      store.setState(TestingStateProvider, state1)
        .then(() => store.setState(TestingStateProvider, state2))
        .then(() => {
          expect(givenSequence).toEqual(expectedSequence);
          done();
        });

    });

  });

  it('it will not create an observerable for each observer', () => {
    spyOn(ReduxRegistry, 'getStore').and.callThrough();
    const selector = new ReduxSelector('todo/items', TestingStateProvider);

    selector.subscribe(() => null);
    selector.subscribe(() => null);

    expect(ReduxRegistry.getStore).toHaveBeenCalledTimes(1);
  });

});
