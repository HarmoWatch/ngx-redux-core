import { Injector } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { selectorSuiteFactory } from '../testing/selector/suite.config';
import { TestingStateProvider } from '../testing/state';
import { ReduxTestingStore } from '../testing/store';
import { ReduxSelectPipe } from './redux-select.pipe';
import { ReduxModule } from '../redux.module';
import { ReduxStore } from '../tokens/redux-store.token';

describe('select/pipe', () => {

  let pipe: ReduxSelectPipe;
  let transformedValue: Observable<{}>;
  let store: ReduxTestingStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReduxModule.forRoot({
          storeFactory: ReduxTestingStore.factory,
          state: {
            provider: TestingStateProvider,
          }
        }),
      ],
      providers: [
        TestingStateProvider,
      ]
    });

    store = TestBed.get(ReduxStore);
    store.setState(TestingStateProvider, TestingStateProvider.INITIAL_STATE);
    pipe = new ReduxSelectPipe(
      [ {provider: TestingStateProvider} ],
      TestBed.get(Injector),
    );

    transformedValue = pipe.transform('todo/items');

  }));

  it('returns an observable', () => {
    expect(transformedValue instanceof Observable).toBeTruthy();
  });

  selectorSuiteFactory().forEach((cfg) => {

    describe(`select "${cfg.given.path}"`, () => {

      it('directly returns the initial state', ((done) => {

        pipe.transform(cfg.given.path).subscribe((value) => {
          expect(value).toEqual(cfg.result.initialState);
          done();
        });

      }));

      it('returns the same selector instance ', () => {
        const firstInstance = pipe.transform(cfg.given.path);
        const secondInstance = pipe.transform(cfg.given.path);
        expect(firstInstance === secondInstance).toBeTruthy();
      });

      it('is distinct', () => {

      });

    });

  });


});
