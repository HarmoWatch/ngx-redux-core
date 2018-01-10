import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ReduxTestingModule } from '../testing/module';
import { selectorSuiteFactory } from '../testing/selector/suite.config';
import { TestingStateProvider } from '../testing/state';
import { ReduxTestingStore } from '../testing/store';
import { ReduxSelectPipe } from './pipe';

describe('select/pipe', () => {

  let pipe: ReduxSelectPipe;
  let transformedValue: Observable<{}>;
  let store: ReduxTestingStore;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        ReduxTestingModule,
      ],
    });

    store = TestBed.get(ReduxTestingStore);

    store.setState(TestingStateProvider, TestingStateProvider.INITIAL_STATE);
    pipe = new ReduxSelectPipe([ {provider: TestingStateProvider} ]);
    transformedValue = pipe.transform('todo/items');
  }));

  it('returns an observable', () => {
    expect(transformedValue instanceof Observable).toBeTruthy();
  });

  selectorSuiteFactory().forEach((cfg) => {

    describe(`relative path "${cfg.given.path}"`, () => {

      it('directly returns the initial state', ((done) => {

        pipe.transform(cfg.given.path).subscribe((value) => {
          expect(value).toEqual(cfg.result.initialState);
          done();
        });

      }));

    });

  });


});
