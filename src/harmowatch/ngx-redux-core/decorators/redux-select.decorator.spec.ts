import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { selectorSuiteFactory } from '../testing/selector/suite.config';
import { Observable } from 'rxjs/Observable';
import { ReduxModule } from 'harmowatch/ngx-redux-core/redux.module';
import { ReduxSelect } from '@harmowatch/ngx-redux-core/decorators/redux-select.decorator';
import { TestingStateProvider } from '@harmowatch/ngx-redux-core/testing/state';
import { ReduxTestingStore } from '@harmowatch/ngx-redux-core/testing/store';
import { ReduxStore } from '@harmowatch/ngx-redux-core/store/token';

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
        ReduxModule.forRoot({
          storeFactory: ReduxTestingStore.factory,
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

    store = TestBed.get(ReduxStore);
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
