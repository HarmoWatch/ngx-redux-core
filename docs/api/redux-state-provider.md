###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [api](./index.md)
 
# ReduxStateProvider

+ [getInitialState](#getinitialstate)
+ [select](#select)
+ [getState](#getstate)
+ [reduce](#reduce)

## getInitialState

This method must be implemented by your provider and is responsible for resolving the initial state. As initial state 
you can return a `Promise`, `Observable` or directly a literal. If you return a `Promise` your state is not initialized 
until your Promise has been *resolved successfully*. If a `Observable` is returned the state is initialized after the
`Observable` has been completed.

*Example - Return a object literal*

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

*Example - Return a Promise*

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

> If your `Promise` is rejected, the state will never be initialized!

*Example - Return a Observable*

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

> If your `Observable` never completes, the state will never be initialized!

## select

This method is used by the [reduxSelect](../pipes/redux-select.md) pipe and the [@ReduxSelect](../decorators/redux-select.md) 
decorator and is already implemented by default. The default implementation caches calls to the state, where the same instance
of a ReduxSelector is returned for the same selector string. Overwriting this method gives you a powerful tool to rename
selectors, for example:

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
  
  select<T>(selector: string = ''): Observable<T> {

    if (selector === 'todos') {
      selector = 'items';
    }

    return super.select(selector);
  }

}
```

## getState

... tbw

## reduce

... tbw
