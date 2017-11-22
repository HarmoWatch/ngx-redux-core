import { async, TestBed } from '@angular/core/testing';
import { ReduxTestingModule } from '../testing/module';
import { TestingState } from '../testing/state';
import { ReduxStateSelector } from './selector';
import { ReduxTestingStore } from '../testing/store';

describe('ReduxStateSelector', () => {

  let store: ReduxTestingStore;
  let fixture: ReduxStateSelector;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        ReduxTestingModule,
      ],
    });

    store = TestBed.get(ReduxTestingStore);
    store.setState(TestingState, TestingState.INITIAL_STATE);
  }));

  it('can handle falsy values', (done) => {

    fixture = new ReduxStateSelector('todo/isFetching', TestingState);

    fixture.getSubject().subscribe((value) => {
      expect(value).toEqual(false);
      done();
    });

  });

});
