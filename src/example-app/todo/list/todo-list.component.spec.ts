import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { ReduxModule } from '../../../harmowatch/ngx-redux-core/redux.module';
import { ReduxTestingStore } from '../../../harmowatch/ngx-redux-core/testing/store';
import { TodoModuleStateProvider } from '../todo.module.state.provider';

describe('TodoListComponent', () => {

  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReduxModule.forRoot({
          storeFactory: ReduxTestingStore.factory,
          state: {
            provider: TodoModuleStateProvider,
          }
        })
      ],
      declarations: [
        TodoListComponent,
      ],
      providers: [
        TodoModuleStateProvider
      ],
    });

    fixture = TestBed.createComponent(TodoListComponent);
  }));


  describe('add()', () => {

    it('dispatches a action', () => {
      expect(fixture.componentInstance.add).toDispatchSomeAction();

      // or you can test for a specific action type
      expect(fixture.componentInstance.add).toDispatchAction('TodoListComponent://add');
    });

  });

});
