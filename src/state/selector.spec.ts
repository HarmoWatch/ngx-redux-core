import { async, TestBed } from '@angular/core/testing';
import { ReduxTestingModule } from '../testing/module';
import { TestingState } from '../testing/state';
import { ReduxStateSelector } from './selector';

describe('ReduxStateSelector', () => {

  let fixture: ReduxStateSelector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReduxTestingModule,
      ],
      providers: [ TestingState ],
    });

    ReduxTestingModule.addStateDefinition({
      provider: TestingState,
    });

  }));

  it('can handle falsy values', (done) => {

    fixture = new ReduxStateSelector('todo/isFetching', TestingState);

    fixture.getSubject().subscribe((value) => {
      expect(value).toEqual(false);
      done();
    });

  });

});
