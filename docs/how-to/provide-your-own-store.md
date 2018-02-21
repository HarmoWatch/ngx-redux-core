###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [how to](./index.md)
 
# Provide your own store

Sometimes you want to have your own redux store to register a custom middleware or enhancer. To make this possible, 
you can specify your own `storeFactory`, which will be used instead of the one that comes with @harmowatch/ngx-redux-core. 
The method `ReduxModule.forRoot` offers a configuration option `storeFactory` for this purpose.

## Example

```ts
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createStore, Store } from 'redux';
import { ReduxModule, ReduxReducerProvider, ReduxRootState } from '@harmowatch/ngx-redux-core';
import { RouterModule } from '@angular/router';

// AOT compiler requires an exported function for factories
export function storeFactory(reduxReducerProvider: ReduxReducerProvider): Store<ReduxRootState> {
  return createStore(
    reduxReducerProvider.rootReducer, // the rootReducer to enable the @ReduxReducer decorated methods
    {}, // the initial state
    ReduxModule.defaultEnhancerFactory(isDevMode()), // in devMode this will enable the "Redux DevTools Extension" 
  );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot({
      storeFactory,
    }),
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

For more information, how to create a store, please see the [redux docs](https://redux.js.org/api-reference/createstore).

----

To use this *new feature* you've to install the **next** version (>= 0.2.3-0).

```
$ npm install @harmowatch/ngx-redux-core@next
```
