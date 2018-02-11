###### @harmowatch/ngx-redux-core / [decorators](./index.md)
 
# @ReduxState

Marks a [ReduxStateProvider](../redux-state-provider.md) class as redux state.
This is required to provide a unique name within the global application state.

```ts
@ReduxState({
  name: string;
})
```

## Configuration Options

### ```name```

Defines the unique state name, that shall be used as key in the global application state.

|               |                                  |
| ------------- | -------------------------------- |
| type          | string                           |
| mandatory     | yes                              |

```ts
class SomeClass { 

  @ReduxAction({name: 'my-unique-name'})
  public someMethod(): string {
    return 'some-return-value';
  }

}
```
