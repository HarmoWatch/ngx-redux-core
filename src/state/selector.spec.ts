import { async } from '@angular/core/testing';
import { ReduxTestingModule } from '../testing/module';
import { TestingState } from '../testing/state';
import { ReduxStateSelector } from './selector';

describe('ReduxStateSelector', () => {

  let fixture: ReduxStateSelector;

  beforeEach(async(() => {
    ReduxTestingModule.setState(TestingState, TestingState.INITIAL_STATE);
  }));

  it('can handle falsy values', (done) => {

    fixture = new ReduxStateSelector('todo/isFetching', TestingState);

    fixture.getSubject().subscribe((value) => {
      expect(value).toEqual(false);
      done();
    });

  });

});
