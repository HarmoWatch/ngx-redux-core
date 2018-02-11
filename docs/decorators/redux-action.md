###### @harmowatch/ngx-redux-core / [decorators](./index.md)
 
# @ReduxAction

Marks a class method as redux action dispatcher. Every time the decorated method is called, it will dispatch a new 
[redux action](https://redux.js.org/docs/basics/Actions.html). The return value of the decorated method is used as payload.

```ts
@ReduxAction({
  type?: string;
  contextClass?: {},
  onDispatchSuccess?: Function;
})
```

## Configuration Options

### ```type```

Overwrites the type of the redux action.

|               |                                  |
| ------------- | -------------------------------- |
| default value | The name of the decorated method |
| type          | string                           |
| mandatory     | no                               |

```ts
class SomeClass {                           //  This will dispatch the following action:
                                            //
  @ReduxAction({type: 'some-action-type'})  //  {
  public someMethod(): string {             //    "type": "some-action-type",
    return 'some-return-value';             //    "payload": "some-return-value"
  }                                         //  }

}
```

### ```contextClass```

Defines the context class which is used to resolve the [@ReduxActionContext](./redux-action-context.md).

|               |            |
| ------------- | ---------- |
| default value | this class |
| type          | class      |
| mandatory     | no         |

```ts
@ReduxActionContext({prefix: 'some-prefix/')
class SomeContextClass {

}

class SomeClass {                                 //  This will dispatch the following action:
                                                  //
  @ReduxAction({contextClass: SomeContextClass})  //  {
  public someMethod(): string {                   //    "type": "some-prefix/someMethod",
    return 'some-return-value';                   //    "payload": "some-return-value"
  }                                               //  }

}
```

The example above will dispatch the following [redux action](https://redux.js.org/docs/basics/Actions.html):

```json
{
  "type": "some-prefix/someMethod",
  "payload": "some-return-value"
}
```

### ```onDispatchSuccess```

Defines a callback function which is called as soon as the action is dispatched. The `this` context of the decorated method 
is bound to the callback function. That means that you can use `this` within the callback function.

|               |            |
| ------------- | ---------- |
| default value | this class |
| type          | class      |
| mandatory     | no         |

```ts
class SomeClass {

  protected someProperty: string;

  @ReduxAction({
    onDispatchSuccess: SomeClass.prototype.someMethodDispatchSuccess
  })
  public someMethod(): string {
    this.someProperty = '123';
    return 'some-return-value';
  }

  public someMethodDispatchSuccess() {
    console.log(this.someProperty); // will log 123
  }

}
```

## Special return values

### Promise

If the method returns a `Promise`, the [redux action](https://redux.js.org/docs/basics/Actions.html) will not be fired 
until the `Promise` is resolved *successfully*.

```ts
class SomeClass {                                 //  This will dispatch the following action:
                                                  //
  @ReduxAction()                                  //  {
  public someMethod(): Promise<string> {          //    "type": "someMethod",
    return Promise.resolve('some-return-value');  //    "payload": "some-return-value"
  }                                               //  }

}
```

### Observable

If the method returns a `Observable`, the [redux action](https://redux.js.org/docs/basics/Actions.html) will not be fired 
until the `Observable` is *completed*. The last value in the event stream is used as the payload.

```ts
class SomeClass {                                   //  This will dispatch the following action:
                                                    //
  @ReduxAction()                                    //  {
  public someMethod(): Observable<string> {         //    "type": "someMethod",
    return Observable.from([                        //    "payload": "some-return-value" 
      'not-used-as-payload',                        //  }
      'some-return-value'
    ]);
  }

}
```
