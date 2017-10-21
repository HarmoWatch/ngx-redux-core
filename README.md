# [WIP] @harmowatch/ngx-redux-core

Hey there, the package is still work in progress, please [check the open tasks](https://github.com/HarmoWatch/ngx-redux/projects/1).

## Decorator and annotation driven redux integration for Angular 2+

* [Installation](#installation)
* [Usage](#usage)

## Installation

First you need to install

- "redux" as peer dependency
- the "@harmowatch/ngx-redux-core" package itself

```sh
npm install redux @harmowatch/ngx-redux-core --save
```

## Usage

#### 1. Import the root `ReduxModule`:

To use ngx-redux-core in your Angular project you have to import `ReduxModule.forRoot()` in the root NgModule of your
application.

The static [`forRoot`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root) method is a convention
that provides & configures services at the same time. Make sure you call this method in your root NgModule, only.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReduxModule} from '@harmowatch/ngx-redux-core';

@NgModule({
    imports: [
        BrowserModule,
        ReduxModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

> Note: Make sure you've called `forRoot` once, otherwise you might end up with different instances of the service(s).

### 2. Create a interface representing your module state

Ok, now you've to create a interface to describe the structure of your module state. 

```ts
export interface ChildModuleStateInterface {
  todo: {
    items: string[];
  };
}
```

### 3. Create a class representing your module state

Before you can register your child module to redux, you need to create a class that represents the state of your child
module.
 
#### As you can see the class ...

##### ... is decorated by `@ReduxState`

You need to decorate your class by `@ReduxState` and to provide a application wide unique state `name` to it. If you can
not be sure that your name is unique enough, then you can add a unique id to it, as in the example shown below. 
Furthermore the configuration accepts one more configuration property called `reducers`, but let's talk about that one
in another chapter.

##### ... implements `ReduxStateInterface`

The `@ReduxState` decorator is only valid for classes which implement the `ReduxStateInterface`. As you can see it's an
generic interface where you've to provide your state interface. The interface compels you to implement a public method
`getInitialState`. The method is responsible to know, how the initial state can be computed and will return it as an
`Promise`, `Observable` or the implementation of the state interface directly.
 

```ts
import { Injectable } from '@angular/core';
import { ReduxState, ReduxStateInterface } from '@harmowatch/ngx-redux-core';
import { ChildModuleStateInterface } from './child-module-state.interface';

@ReduxState({
  name: 'child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72'
})
@Injectable()
export class ChildModuleState implements ReduxStateInterface<ChildModuleStateInterface> {

  getInitialState(): Promise<StateInterface> {
    return Promise.resolve({ // You can return a promise
      todo: {
        items: ['Item 1', 'Item 2'],
      }
    });
  }

}
```


### 4. Import the child `ReduxModule`:

The next thing you need to do is to register your child NgModule as an redux module. To do that you just have to add
`ReduxModule.forChild` to the list of imports. The static `forChild` method requires one configuration argument to be
given. The configuration object has one required property `state` where you have to provide a reference to the 
constructor of the freshly created state class. 

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReduxModule} from '@harmowatch/ngx-redux-core';
import { ChildModuleState } from './child-module-state';

@NgModule({
    imports: [
        BrowserModule,
        ReduxModule.forChild({state: ChildModuleState})
    ],
    bootstrap: [AppComponent]
})
export class ChildModule { }
```

### 5. Select data from the state

#### 5.1 Using the `reduxSelect` pipe

The easiest way to get the data from the state is to use the `reduxSelect` pipe together with Angular's `async` pipe.

```angular2html
<pre>{{ 'todo/items' | reduxSelect | async | json }}</pre>
``` 

#### 5.2 Using the `@ReduxSelect` annotation


#### 5.3 Using the `ReduxStateSelector` class

```ts
new ReduxStateSelector('todo/items').asObservable();
```