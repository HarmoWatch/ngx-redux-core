import { async } from '@angular/core/testing';

import { TodoListReducer } from './todo-list.reducer';
import { TodoListItem } from './todo-list-item';
import { TodoModuleStateProvider } from '../todo.module.state.provider';
import { getActionType } from '../../../harmowatch/ngx-redux-core/index';
import { ReduxActionWithPayload } from '../../../harmowatch/ngx-redux-core/interfaces/redux-action-with-payload.interface';
import { TodoListComponent } from './todo-list.component';

describe('TodoListReducer', () => {

  let fixture: TodoListReducer;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   providers: [
    //     TodoListReducer,
    //   ]
    // });
    //
    // fixture = TestBed.get(TodoListReducer);

    fixture = new TodoListReducer();
  }));

  describe('addTodo()', () => {

    let todo: TodoListItem;
    let action: ReduxActionWithPayload<TodoListItem>;

    beforeEach(() => {
      todo = {
        uuid: '',
        label: 'some todo',
        creationDate: '',
      };

      action = {
        type: getActionType(TodoListComponent.prototype.add),
        payload: todo,
      };

    });

    it('listens to the correct actions', () => {
      // expect(fixture.addTodo).toListenForActions([
      //   TodoListComponent.prototype.add,
      //   TodoListComponent.prototype.remove,
      // ]);
    });

    it('does not touch the given state', () => {
      expect(fixture.addTodo).doesNotTouchTheGivenState({
        state: TodoModuleStateProvider.DEFAULT_STATE,
        action,
      });
    });

    it('returns the new state', () => {
      expect(fixture.addTodo(TodoModuleStateProvider.DEFAULT_STATE, action)).toEqual({
        items: [ todo ]
      });
    });

  });

  describe('removeTodo()', () => {

    it('listens to the correct action', () => {
      expect(fixture.removeTodo).toListenForAction(TodoListComponent.prototype.remove);
    });

  });

});
