###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [decorators](./index.md)
 
# @ReduxActionContext

Marks a class as redux action context. This context is used by the [@ReduxAction](./redux-action.md) decorator to resolve the
action type.

```ts
@ReduxActionContext({
  prefix: string;
})
```

## Configuration Options

### ```prefix```

Sets the prefix that shall be used for all redux actions that will use this context. The prefix and the action type is 
concatenated to one string.

|               |        |
| ------------- | ------ |
| type          | string |
| mandatory     | yes    |

```ts
@ReduxActionContext({
  prefix: 'some-prefix/'
})
class SomeClass {                //  This will dispatch the following action:
                                 //
  @ReduxAction()                 //  {
  public someMethod(): string {  //    "type": "some-prefix/someMethod",
    return 'some-return-value';  //    "payload": "some-return-value"
  }                              //  }

}
```
