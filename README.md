# @harmowatch/ngx-redux-core

## Decorator driven redux integration for Angular 2+

* What is ...
  * [Redux?](#what-is-redux)
  * [ngx-redux?](#what-is-ngx-redux)

* [Installation](#installation)
* [Usage](#usage)
  * [1.) Import the root `ReduxModule`](#1-import-the-root-reduxmodule)
    * [1.1.) Bootstrap your own Redux Store](#11-bootstrap-your-own-redux-store)
  * [2.) Describe your state](#2-describe-your-state)
  * [3.) Create a class representing your module state](#3-create-a-class-representing-your-module-state)
  * [4.) Register the state](#4-register-the-state)
  * [5.) Select data from the state](#5-select-data-from-the-state)
  * [6.) Dispatch an Redux Action](#6-dispatch-an-redux-action)
  * [7.) Reduce the State](#7-reduce-the-state)
  * 8.) How to test (TBW)
  
* [Known violations / conflicts](#known-violations--conflicts)

## What is Redux?

Redux is a popular and common approach to manage a application state. The three principles of redux are:

- [Single source of truth](http://redux.js.org/docs/introduction/ThreePrinciples.html#single-source-of-truth)
- [State is read-only](http://redux.js.org/docs/introduction/ThreePrinciples.html#state-is-read-only)
- [Changes are made with pure functions](http://redux.js.org/docs/introduction/ThreePrinciples.html#changes-are-made-with-pure-functions)

[Read more about Redux](http://redux.js.org/)

## What is ngx-redux?

This package helps you to integrate Redux in your Angular 2+ application. By using *ngx-redux* you'll get the following
benefits:

- support for [lazy loaded NgModules](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router)
- [Ahead-of-Time Compilation (AOT)](https://angular.io/guide/aot-compiler) support
- a [Angular Pipe](https://angular.io/guide/pipes) to select the values from the state
- better typescript and refactoring support
- a decorator and module driven approach
- easy to test

## Installation

First you need to install

- "redux" as peer dependency
- the "@harmowatch/ngx-redux-core" package itself

```sh
npm install redux @harmowatch/ngx-redux-core --save
```

## Usage

### 1. Import the root `ReduxModule`:

To use *ngx-redux* in your Angular project you have to import `ReduxModule.forRoot()` in the root NgModule of your
application.

The static [`forRoot`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root) method is a convention
that provides and configures services at the same time. Make sure you call this method in your root NgModule, only!

###### Example

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule } from '@harmowatch/ngx-redux-core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot(),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

#### 1.1 Bootstrap your own [Redux Store](http://redux.js.org/docs/basics/Store.html)

By default *ngx-redux* will bootstrap a [Redux Store](http://redux.js.org/docs/basics/Store.html) for you. 
Is the app running in [devMode](https://angular.io/api/core/isDevMode), the default store is prepared to work together 
with the [Redux DevTools](https://github.com/gaearon/redux-devtools).

If you want to add a [Middleware](http://redux.js.org/docs/advanced/Middleware.html) like logging, you've to provide a
custom *stateFactory*.

###### Example

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule, ReduxModuleRootReducer } from '@harmowatch/ngx-redux-core';
import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux';
import logger from 'redux-logger';

import { AppComponent } from './app.component';

export function enhancerFactory(): StoreEnhancer<{}> {
  return applyMiddleware(logger);
}

export function storeFactory(): Store<{}> {
  return createStore(
    ReduxModuleRootReducer.reduce,
    {},
    enhancerFactory()
  );
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot({
      storeFactory,
    }),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

### 2. Describe your state

Ok, now you've to create a interface to describe the structure of your state.

###### Example 

```ts
export interface AppModuleState {
  todo: {
    items: string[];
  };
}
```

### 3. Create a state provider

Before you can register your state to redux, you have to implement the `ReduxStateProvider`.

#### As you can see in the example below, the class ...

##### ... is decorated by `@ReduxState`

You need to decorate your class by `@ReduxState` and to provide a application wide unique state `name` to it. If you can
not be sure that your name is unique enough, then you can add a unique id to it (*as in the example shown below*). 

##### ... implements `ReduxStateProvider`

The `@ReduxState` decorator is only valid for classes implementing the `ReduxStateProvider`. This is a generic interface, where 
you've to provide your previously created `AppModuleState`. The `ReduxStateProvider` enforces the implementation of the public 
method `getInitialState`. This method is responsible for knowing what the initial state can look like. You can return a 
`Promise`, `Observable` or an implementation of the state interface.

> Note: The method `getInitialState` is called by *ngx-redux* automatically! Your state will be registered to the root
state **after** the initial state was resolved successfully.
 
###### Example 1) Interface implementation

```ts
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';
import { AppModuleState } from './app.module.state';

@ReduxState({
  name: 'app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72'
})
export class AppModuleStateProvider implements ReduxStateProvider<AppModuleState> {

  getInitialState(): AppModuleState {
    return {
      todo: {
        items: [ 'Item 1', 'Item 2' ],
      }
    };
  }

}
``` 
 
###### Example 2) Promise

```ts
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';
import { AppModuleState } from './app.module.state';

@ReduxState({
  name: 'app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72'
})
export class AppModuleStateProvider implements ReduxStateProvider<AppModuleState> {

  getInitialState(): Promise<AppModuleState> {
    return Promise.resolve({
      todo: {
        items: [ 'Item 1', 'Item 2' ],
      }
    });
  }

}
```

> Note: If you return a rejected or unresolved `Promise` your state is never registered!

###### Example 3) Observable

```ts
import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core';
import { AppModuleState } from './app.module.state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@ReduxState({
  name: 'app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72'
})
export class AppModuleStateProvider implements ReduxStateProvider<AppModuleState> {

  getInitialState(): Observable<AppModuleState> {
    const subject = new BehaviorSubject<AppModuleState>({
      todo: {
        items: [ 'Item 1', 'Item 2' ],
      }
    });

    subject.complete();
    return subject.asObservable();
  }

}
```

> Note: If you return a uncompleted or rejected `Observable` your state is never registered!

### 4. Register the state:

The next thing you need to do, is to register your state. For that *ngx-redux* accepts a configuration property `state.provider`. 

###### Example

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule } from '@harmowatch/ngx-redux-core';

import { AppComponent } from './app.component';
import { AppModuleStateProvider } from './app.module.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot({
      state: {
        provider: AppModuleStateProvider,
      }
    }),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

> Note: For lazy loaded modules you've to use `forChild`.

Your redux module is ready to run now. Once your initial state was resolved, your redux module is registered to the 
global redux state like this:
                                       
```json
{
  "app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72": {
    "todo": {
      "items": [
        "Item 1",
        "Item 2"
      ]
    }
  }
}
```

### 5. Select data from the state

To select values from the state you can choose between this three options:

- the `reduxSelect` [Angular Pipe](https://angular.io/guide/pipes)
- the `ReduxSelect` decorator
- the `ReduxSelector` class

Each selector option will accept a relative *todo/items* or an absolute path 
*/app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items*. It's recommended to use relative paths only. The 
absolute path is only there to give you a maximum of flexibility.

#### 5.1 Using the `reduxSelect` pipe

The easiest way to get values from the state, is to use the `reduxSelect` pipe together with Angular's `async` pipe. The
right state provider is determined automatically, because you're in a Angular context.

> Note: You can use the same selector multiple times, *ngx-redux* will cache it for you ;)

> Note: [distinctUntilChanged](http://rxmarbles.com/#distinctUntilChanged) is applied automatically

###### Example 1) Relative path (recommended)

```angular2html
<pre>{{ 'todo/items' | reduxSelect | async | json }}</pre>
```

###### Example 2) Absolute path (avoid)

```angular2html
<pre>{{ '/app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items' | reduxSelect | async | json }}</pre> 
``` 

#### 5.2 Using the `@ReduxSelect` annotation

If you want to access the state values in your component you can use the `@ReduxSelect` decorator. *ngx-redux* can not
determine which state you mean automatically, because decorators run outside the Angular context. For that you've to
pass in a reference to your state class as 2nd argument. When you specify an absolute path, you don't need the 2nd 
argument anymore.

> Note: [distinctUntilChanged](http://rxmarbles.com/#distinctUntilChanged) is applied automatically

###### Example 1) Relative path (recommended)

```ts
import { Component } from '@angular/core';
import { ReduxSelect } from '@harmowatch/ngx-redux-core';
import { AppModuleStateProvider } from './app.module.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  @ReduxSelect('todo/items', AppModuleStateProvider)
  private todoItems: Observable<string[]>;

  constructor() {
    this.todoItems.subscribe((items) => console.log('ITEMS', items));
  }

}
```

###### Example 2) Absolute path (avoid)

```ts
import { Component } from '@angular/core';
import { ReduxSelect } from '@harmowatch/ngx-redux-core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {


  @ReduxSelect('/app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items')
  private todoItems: Observable<string[]>;

  constructor() {
    this.todoItems.subscribe((items) => console.log('ITEMS', items));
  }

}
```

#### 5.3 Using the `ReduxSelector` class

The `ReduxSelector` extends the `rxjs.Observable`, that means that you can use all the `rxjs` power here 🎉

> Note: [distinctUntilChanged](http://rxmarbles.com/#distinctUntilChanged) is NOT applied automatically

###### Example 1) Relative path (recommended)

```ts
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { ReduxSelector } from '@harmowatch/ngx-redux-core';
import { AppModuleStateProvider } from './app.module.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor() {
    const selector: Observable<string[]> = new ReduxSelector('todo/items', AppModuleStateProvider);
    selector.subscribe(items => console.log('ITEMS', items));
  }

}
```

###### Example 2) Absolute path (avoid)

```ts
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { ReduxSelector } from '@harmowatch/ngx-redux-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor() {
      const selector: Observable<string[]> = new ReduxSelector('/app-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items');
      selector.subscribe(items => console.log('ITEMS', items));
  }

}
```

### 6. Dispatch an [Redux Action](http://redux.js.org/docs/basics/Actions.html)

To dispatch an action is very easy. Just annotate your class method by `@ReduxAction`. Everytime your method is called 
*ngx-redux* will dispatch a [Redux Action](http://redux.js.org/docs/basics/Actions.html) for you automatically! 
The `return` value of the decorated method will become the payload of the action and the name of the method is used as 
the action type.

> Note: It's very useful to write a provider, where the action method(s) are delivered by. See the example below. 

###### Example

```ts
import { Injectable } from '@angular/core';
import { ReduxAction } from '@harmowatch/ngx-redux-core';

@Injectable()
export class AppActions {

  @ReduxAction()
  public addTodo(todo: string): string {
    return todo;
  }

}
```

Then register the provider to your module:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule } from '@harmowatch/ngx-redux-core';
import { AppActions } from './app.actions'; // (1) Add the import

import { AppComponent } from './app.component';
import { AppModuleStateProvider } from './app.module.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot({
      state: {
        provider: AppModuleStateProvider,
      }
    }),
  ],
  providers: [ AppActions ], // (2) Add to the provider list
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

Now you can inject the provider to your component:

###### Example

```ts
import { Component } from '@angular/core';
import { AppActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor(appActions: AppActions) {
    appActions.addTodo('SampleTodo');
  }

}
```

The example above will dispatch the following action:

```json
{
  "type": "addTodo",
  "payload": "SampleTodo"
}
```

Ok that's cool, but there's no information in the action type that this was an `AppActions` action, right?
But don't worry you can follow two different and very easy ways to fix that.

###### Example 1) Provide a action type

```ts
import { Injectable } from '@angular/core';
import { ReduxAction } from '@harmowatch/ngx-redux-core';

@Injectable()
export class AppActions {

  @ReduxAction({
    type: 'AppActions://addTodo'
  })
  public addTodo(todo: string): string {
    return todo;
  }

}
```

`addTodo` will dispatch the following action from now on:

```json
{
  "type": "AppActions://addTodo",
  "payload": "SampleTodo"
}
```

#### Example 2) Provide a action context (recommended)

```ts
import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core';

@ReduxActionContext({
  prefix: 'AppActions://'
})
@Injectable()
export class AppActions {

  @ReduxAction()
  public addTodo(todo: string): string {
    return todo;
  }

}
```

`addTodo` will dispatch the following action from now on:

```json
{
  "type": "AppActions://addTodo",
  "payload": "SomeTodo" 
}
```

### Example 3) Combine the ReduxContext and action type

```ts
import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core';

@ReduxActionContext({
  prefix: 'AppActions://'
})
@Injectable()
export class AppActions {

  @ReduxAction({
    type: 'add-todo'
  })
  public addTodo(todo: string): string {
    return todo;
  }

}
```

`addTodo` will dispatch the following action from now on:

```json
{
  "payload": "SampleTodo",
  "type": addDefinitionIfUnknown
}
```

### 7. Reduce the State

We have no way to manipulate the data that are stored in the [Redux Store](http://redux.js.org/docs/basics/Store.html)
yet. For that we need a reducer.

###### Example

```ts
import { ActionInterface, ReduxReducer } from '@harmowatch/ngx-redux-core';
import { AppActions } from './app.actions';
import { AppModuleState } from './app.module.state';

export class AppModuleReducer {

  @ReduxReducer(AppActions.prototype.addTodo)
  static addTodo(state: AppModuleState, action: ActionInterface<string>) {
    return {
      ...state,
      todo : {
        ...state.todo,
        items : state.todo.items.concat(action.payload)
      }
    }
  }

}
```

The last thing you need to do, is to wire the reducer against the state:

###### Example 

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule } from '@harmowatch/ngx-redux-core';
import { AppActions } from './app.actions';

import { AppComponent } from './app.component';
import { AppModuleReducer } from './app.module.reducer'; // (1) Add the import
import { AppModuleStateProvider } from './app.module.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot({
      state: {
        provider: AppModuleStateProvider,
        reducers: [ AppModuleReducer ] // (2) Register the reducer
      }
    }),
  ],
  providers: [ AppActions ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

## Known violations / conflicts

### Redux principles

#### [Changes are made with pure functions](http://redux.js.org/docs/introduction/ThreePrinciples.html#changes-are-made-with-pure-functions)

One of the principles of Redux is to change the state using **pure functions**, only. Unfortunately there is 
**no typescript support** to decorate pure functions right now. That's the reason why *ngx-redux* uses classes where the
reducer functions are shipped by. To find a viable solution the reducer functions shall be written as static methods.
