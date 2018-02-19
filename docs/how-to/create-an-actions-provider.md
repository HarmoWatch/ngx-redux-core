###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [how to](./index.md)
 
# Create an actions provider

Of course you can also create a provider to fire your Redux actions. Here's an example using 
[@ReduxActionContext](../decorators/redux-action-context.md) and [@ReduxAction](../decorators/redux-action.md):

## Example

```ts
import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core';

@Injectable()
@ReduxActionContext({prefix: 'TodoActions://'})
export class TodoActions {

  @ReduxAction()
  add(label: string): TodoListItem {
    return label; // your return value is the payload
  }

}
```

Now `@harmowatch/ngx-redux-core` will dispatch the following action, every time the `add` method was called:

```json
{
  "type": "TodoActions://add",
  "payload": "SampleTodo"
}
```

