###### [ngx-redux](../../README.md) / Decorator

# `@ReduxReducer(actionOrActions)`

You can decorate your class method using the `@ReduxReducer` decorator. When the redux action was dispatched, the method 
is called automatically. 

As the first argument you've to pass in the action or action name the reducer is created for. One of the big advantages 
of ngx-redux is, that you can pass in a reference to the action method directly. Let's assume you've created the 
following interfaces and actions:

```ts
import { ReduxAction } from '@ngx-redux';

interface ITodoState {
  todoList: string[];
}

class TodoAction {

  @ReduxAction()
  public static addTodo(todo: string) {
    return todo;
  }

  @ReduxAction()
  public setTodoList(todoList: string[]) {
    return {
      todoList,
    };
  }

}
```

Then you can wire the reducer against the actions like this:

```ts
import { IReduxReducerAction, ReduxReducer } from '@ngx-redux';

class TodoReducer {

  @ReduxReducer(TodoAction.addTodo)
  public reduceAddTodo(state: ITodoState, action: IReduxReducerAction<string>) {
    return Object.assign({}, {todos: state.todoList.concat(action.payload)});
  }

  @ReduxReducer(TodoAction.prototype.setTodoList)
  public reduceSetTodos(state: ITodoState, action: IReduxReducerAction<{ todoList: string[] }>) {
    return Object.assign({}, {todos: action.payload});
  }

}
```
