import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ReduxSelect } from './redux-select.decorator';
import { TestingStateProvider } from '../testing/state';
import { ReduxTestingStore } from '../testing/store';
import { ReduxModule } from '../redux.module';
import { ReduxStore } from '../tokens/redux-store.token';
import { selectorSuiteFactory } from '../testing/selector/suite.config';

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
  let stateProvider: TestingStateProvider;

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

    stateProvider = TestBed.get(TestingStateProvider);
    TestBed.compileComponents();

    store = TestBed.get(ReduxStore);
    store.setState(TestingStateProvider, TestingStateProvider.INITIAL_STATE);
    fixture = TestBed.createComponent(TestComponent);
    spyOn(stateProvider, 'select').and.callThrough();
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

      it('uses the select method provided by the state provider', (done) => {
        fixture.componentInstance[ cfg.given.name ].subscribe((value) => {
          expect(stateProvider.select).toHaveBeenCalledTimes(1);
          done();
        });
      });

    });

  });


});
