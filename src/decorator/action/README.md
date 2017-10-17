###### [ngx-redux](../../../README.md) / Decorator

# `@ReduxAction(customType?)`

You can decorate your class method using the `@ReduxAction` decorator. When the method is called, a new redux action
is dispatched automatically.

As the first argument you can pass in a custom action name, but it's much more be better to use the auto generated one.
Per default the action type is generated using the following schemas:

| Method-Type      | Schema                              | Example                       |
| ---------------- | ----------------------------------- | ----------------------------- |
| prototype        | `${className}/${methodName}`        | SampleClass/methodName        |
| static           | `${className}/static/${methodName}` | SampleClass/static/methodName |

The `return` value of your method becomes the payload of the dispatched action. When a `Promise` is returned, and the 
`Promise` resolves successfully, the action is dispatched with the result of the `Promise` as payload.

## Examples

```ts
import { ReduxAction } from '@ngx-redux';

export class TodoAction {

  @ReduxAction()
  public static addTodo(todo: string) {
    return todo;
  }

  @ReduxAction()
  public addTodo(todo: string) {
    return {
      todo
    };
  }
  
  @ReduxAction('customActionName')
  public static add(todo: string) {
    return Promise.resolve(todo);
  }

  @ReduxAction()
  public static wontWork(todo: string) {
    return Promise.reject();
  }
}
```

When you call `TodoAction.addTodo('fooBar')` the following action is dispatched:

```json
{
  "type": "TodoAction/static/addTodo",
  "payload": "fooBar"
}
```

When you call `new TodoAction().addTodo('fooBar')` the following action is dispatched:

```json
{
  "type": "TodoAction/addTodo",
  "payload": {
    "todo": "fooBar"
  }
}
```

When you call `TodoAction.add('fooBar')` the following action is dispatched:

```json
{
  "type": "customActionName",
  "payload": "fooBar"
}
```

When you call `TodoAction.wontWork('fooBar')`, there's no action dispatched.