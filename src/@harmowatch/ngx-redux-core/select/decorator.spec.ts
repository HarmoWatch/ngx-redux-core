import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ReduxTestingModule } from '../testing/module';
import { selectorSuiteFactory } from '../testing/selector/suite.config';
import { TestingStateProvider } from '../testing/state';
import { ReduxTestingStore } from '../testing/store';
import { ReduxSelect } from './decorator';

class TestClass {

  @ReduxSelect('', TestingStateProvider)
  empty: Observable<{}>;

  @ReduxSelect('todo', TestingStateProvider)
  todo: Observable<{}>;

  @ReduxSelect('todo/items', TestingStateProvider)
  todoItems: Observable<{}>;

  @ReduxSelect('todo/items/', TestingStateProvider)
  todoItemsTrailingSlash: Observable<{}>;

  @ReduxSelect('/', TestingStateProvider)
  root: Observable<{}>;

  @ReduxSelect('unknown', TestingStateProvider)
  unknown: Observable<{}>;

}

describe('select/decorator', () => {

  let fixture: TestClass;
  let store: ReduxTestingStore;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        ReduxTestingModule.forRoot({
          state: {
            provider: TestingStateProvider,
            reducers: [],
          },
        }),
      ],
    });

    store = TestBed.get(ReduxTestingStore);
    store.setState(TestingStateProvider, TestingStateProvider.INITIAL_STATE);
    fixture = new TestClass();
  }));

  selectorSuiteFactory().forEach((cfg) => {

    describe(`property "${cfg.given.name}"`, () => {

      it('injects an observable', () => {
        expect(fixture[cfg.given.name] instanceof Observable).toBeTruthy();
      });

      it('directly returns the initial state', ((done) => {

        fixture[ cfg.given.name ].subscribe((value) => {
          expect(value).toEqual(cfg.result.initialState);
          done();
        });

      }));

    });

  });


});
