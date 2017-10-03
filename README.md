# [WIP] ngx-redux 

The project is work in progress ;) Here you can see the current progress:

[████████████████████████████████████████░░░░░░░░░░ 80% Done](https://changaco.oy.lc/unicode-progress-bars/)

The following tasks are left:

- improve unit test coverage
- support / test lazy loaded modules
- finalize docs
- support initial state again
- @ReduxSelect shall support custom functions and work with relative and absolute paths.
- delete obsolete code
- provide a guide for unit testing
- create pipe to access state directly from the view

## Decorator driven redux integration for Angular 2+

* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* Decorator
  * [@Redux](src/decorator/redux/redux.md)
  * [@ReduxAction](src/decorator/action/action.md)
  * [@ReduxReducer](src/decorator/reducer/reducer.md)
  * [@ReduxSelect](src/decorator/select/select.md)

## About

This package gives you an easy way to use redux within your Angular 2+ application. By using this package you've the
following benefits:

- Module and component driven approach
- Classes for *reducers* and *actions*
- The reducer is connected to the payload on an action
- Easy refactoring by referencing *reducers* and *actions* like that:  
  
  ```ts
  import { IReduxAction, ReduxAction, ReduxReducer } from '@ngx-redux';
  
  export class SampleComponent {
    
      @ReduxAction()
      public static sampleAction() {
          return 'just return the payload';
      }

      @ReduxAction()
      public someOtherAction() {
          return {
            foo: 'bar'
          };
      }
    
  }
  
  export class SampleReducer {
  
    @ReduxReducer(SampleComponent.sampleAction)
    public foo(state: {}, action: IReduxAction) {
      // ...
    }
    
    @ReduxReducer(SampleComponent.prototype.someOtherAction)
    public bar(state: {}, action: IReduxAction) {
      // ...
    }
  
  }
  ```   

## Installation

First you need to install the npm package:

```sh
npm install @ngx-redux --save
```

## Usage

#### 1. Import the `ReduxModule`

Ok, now you have to import `ReduxModule.forRoot()` in the root NgModule of your application.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReduxModule} from '@ngx-redux';

@NgModule({
    imports: [
        BrowserModule,
        ReduxModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### `ReduxModule.forRoot()` configuration

###### `enhancer`

You can add a store enhancer as documented here:
[http://redux.js.org/docs/api/createStore.html](http://redux.js.org/docs/api/createStore.html).

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReduxModule} from '@ngx-redux';

@NgModule({
    imports: [
        BrowserModule,
        ReduxModule.forRoot({
            enhancer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Decorate a child NgModule of your application with `@Redux()` and provide the `initialState`

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Redux} from '@ngx-redux';

@NgModule({
    imports: [
        BrowserModule,
    ],
})
@Redux()
export class SampleModule {

  public get initialState() {
    return {
      yolo: true,
    };
  }

}
```

#### 3. Decorate a your actions with `@ReduxAction()`

```ts
import { ReduxAction } from '@ngx-redux';

export class SampleComponent {
  
    @ReduxAction()
    public static someStaticAction() {
        return 'just return the payload';
    }

    @ReduxAction()
    public somePrototypeAction() {
        return {
          foo: 'bar'
        };
    }
    
    @ReduxAction('someAction')
    public someActionWithCustomName() {
      // i've no payload
    }

}
```

#### 4. Create a reducer

```ts
import { IReduxAction, ReduxAction, ReduxReducer } from '@ngx-redux';
import {SampleComponent} from '...';

export class SampleReducer {

  // listen for a static action

  @ReduxReducer(SampleComponent.sampleAction)
  public foo(state: {}, action: IReduxAction) {
      // ...
  }
  
  
  // listen for a prototype action
  
  @ReduxReducer(SampleComponent.prototype.someOtherAction)
  public bar(state: {}, action: IReduxAction) {
      // ...
  }

  
  // listen for multiple actions

  @ReduxReducer([
      SampleComponent.sampleAction,
      SampleComponent.prototype.someOtherAction,
  ])
  public baz(state: {}, action: IReduxAction) {
      // ...
  }

}
```

#### 5. Add the reducer to your module

In step 2 you've decorated your module with `@Redux()`. Now you've to add your reducer like that:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Redux} from '@ngx-redux';
import {SampleReducer} from '...';

@NgModule({
    imports: [
        BrowserModule,
    ],
})
@Redux({
    reducers: [
        SampleReducer
    ],
})
export class SampleModule { }
```

#### 6. Access the data using the `@ReduxSelect` decorator.

`@ReduxSelect` will create an observable for you, to access the data from the store. Right now you can pass only an 
array, but it's planned that you can provide a function as well.

```ts
import { ReduxSelect } from '@ngx-redux';

export class SampleComponent {
  
  @ReduxSelect([ 'path', 'to', 'your', 'store' ])
  myObservable$: Observable<string>;

}
```

Within you template you can render the data using the [AsyncPipe](https://angular.io/api/common/AsyncPipe).

```angular2html
<div>
    {{ myObservable$ | async }}
</div>
```