import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReduxSelect } from '@harmowatch/ngx-redux-core';
import { selectorSuiteFactory } from '@harmowatch/ngx-redux-core/testing/selector/suite.config';
import { Observable } from 'rxjs/Observable';
import { ReduxTestingModule } from '../testing/module';
import { TestingStateProvider } from '../testing/state';
import { ReduxTestingStore } from '../testing/store';

@Component({
  template: '',
})
class TestComponent {

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

  let fixture: ComponentFixture<TestComponent>;
  let store: ReduxTestingStore;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [
        ReduxTestingModule.forRoot({
          state: {
            provider: TestingStateProvider,
            reducers: [],
          },
        }),
      ],
      providers: [
        TestingStateProvider,
      ]
    });

    TestBed.get(TestingStateProvider);
    TestBed.compileComponents();

    store = TestBed.get(ReduxTestingStore);
    store.setState(TestingStateProvider, TestingStateProvider.INITIAL_STATE);
    fixture = TestBed.createComponent(TestComponent);
  }));

  beforeEach(async(() => {
    fixture.detectChanges();
  }));

  selectorSuiteFactory().forEach((cfg) => {

    describe(`property "${cfg.given.name}"`, () => {

      it('injects an observable', () => {
        expect(fixture.componentInstance[ cfg.given.name ] instanceof Observable).toBeTruthy();
      });

      it('directly returns the initial state', ((done) => {
        fixture.componentInstance[ cfg.given.name ].subscribe((value) => {
          expect(value).toEqual(cfg.result.initialState);
          done();
        });

      }));

    });

  });


});
