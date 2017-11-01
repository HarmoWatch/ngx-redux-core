import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ReduxTestingModule } from '../testing/module';
import { selectorSuiteFactory } from '../testing/selector/suite.config';
import { TestingState } from '../testing/state';
import { ReduxSelect } from './decorator';

class TestClass {

  @ReduxSelect('', TestingState)
  empty: Observable;

  @ReduxSelect('todo', TestingState)
  todo: Observable;

  @ReduxSelect('todo/items', TestingState)
  todoItems: Observable;

  @ReduxSelect('todo/items/', TestingState)
  todoItemsTrailingSlash: Observable;

  @ReduxSelect('/', TestingState)
  root: Observable;

  @ReduxSelect('unknown', TestingState)
  unknown: Observable;

}

describe('select/decorator', () => {

  let fixture: TestClass;

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

    fixture = new TestClass();
  }));

  selectorSuiteFactory().forEach((cfg) => {

    describe(`property "${cfg.given.name}"`, () => {

      it('injects an observable', () => {
        expect(fixture[ cfg.given.name ] instanceof Observable).toBeTruthy();
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
