###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [api](./index.md)
 
# ReduxStateProvider

### getInitialState

To describe your module state, you need to create a state provider. This provider has to extend the `ReduxStateProvider<S>` 
class and to provide the method `getInitialState`. As initial state you can return a `Promise`, `Observable` or directly 
a literal. Please note that the `ReduxStateProvider<S>` is a generic class to which you must pass your state type. The
`getInitialState` method is called by [@harmowatch/ngx-redux-core](../../README.md) during the initialization process.

##### `getInitialState` returns a literal

```ts
import { Injectable } from '@angular/core';
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';

@Injectable()
@ReduxState({name: 'your-module'})
export class YourModuleStateProvider extends ReduxStateProvider<YourModuleState> {

  getInitialState(): YourModuleState {
    return {
      items: []
    };
  }}

}
```

##### `getInitialState` returns a `Promise`

The module state is not initialized until your Promise has been *resolved successfully*.
If your `Promise` is rejected, the state will never be initialized!

```ts
import { Injectable } from '@angular/core';
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';

@Injectable()
@ReduxState({name: 'your-module'})
export class YourModuleStateProvider extends ReduxStateProvider<YourModuleState> {

  getInitialState(): Promise<YourModuleState> {
    return Promise.resolve({
      items: []
    });
  }}

}
```

##### `getInitialState` returns a `Observable`

The module state is initialized *after* the `Observable` has been completed.
If your `Observable` never completes, the state will never be initialized!

```ts
import 'rxjs/add/observable/from';

import { Injectable } from '@angular/core';
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';

@Injectable()
@ReduxState({name: 'your-module'})
export class YourModuleStateProvider extends ReduxStateProvider<YourModuleState> {

  getInitialState(): Observable<YourModuleState> {
    return Observable.from([{
      items: []
    }]);
  }

}
```

### select

This method is used by the [reduxSelect](../pipes/redux-select.md) pipe and the [@ReduxSelect](../decorators/redux-select.md) 
decorator to resolve the state. The `ReduxStateProvider`'s implementation caches the `select` calls, and returns the same 
instance of a [ReduxSelector](../api/redux-selector.md) for the same selector string. You can overwrite this method to
implement some custom `select` behavior.

### reduce

This method is called by [@harmowatch/ngx-redux-core](../../README.md) to reduce your module's state. There's already a 
default implementation which will forward the reduce command to the appropriate 
[@ReduxReducer](../decorators/redux-reducer.md). You can overwrite this method to implement some custom reducer behavior.

### getState

Returns a `Promise` with a snapshot of the state. A basic principle of [rxjs](https://github.com/ReactiveX/rxjs) is that 
you should not break out of the event chain, so it is better to use the [select](#select) method. In exceptional cases, the 
use of the `getState` method can also make sense. The `getState` method isn't used by [@harmowatch/ngx-redux-core](../../README.md)
internally.
