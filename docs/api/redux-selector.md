###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [api](./index.md)
 
# ReduxSelector

The `ReduxSelector` extends the [ReplaySubject](http://reactivex.io/rxjs/class/es6/ReplaySubject.js~ReplaySubject.html). 
To get a value right when subscribing, the buffer size of the `ReplaySubject` has been set to 1. Furthermore you have 
all the power of [RxJS](https://github.com/ReactiveX/rxjs) available on the `ReduxSelector`'s instance.

It is also important to know that this class is used under the hood of the [reduxSelect](./docs/pipes/redux-select.md) 
pipe and the [@ReduxSelect](./docs/decorators/redux-select.md) decorator.

## Usage

Let's suppose you have defined the following state provider:

```ts
import { Injectable } from '@angular/core';
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';

interface YourModuleState {
  todo: {
    items: string[];
    isFetching: boolean;
  }
}

@Injectable()
@ReduxState({name: 'your-module'})
export class YourModuleStateProvider extends ReduxStateProvider<YourModuleState> {

  getInitialState(): YourModuleState {
    return {
      todo: {
        items: [],
        isFetching: false,
      }
    };
  }}

}
```

Then you can query the todo items as follows:

```
new ReduxSelector('todo/items', YourModuleStateProvider).subscribe(items => {
  console.log('todo items', items);
})
```

There's another, unrecommended, way to specify the selector, as you can see in the example above the "todo/items" selector 
is an relative path to the given `YourModuleStateProvider`. But you can also provide an absolute selector:

```
new ReduxSelector('/your-module/todo/items').subscribe(items => {
  console.log('todo items', items);
})
```

In this case, you can omit the second argument, because it's ignored.
