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

###### Example

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReduxModule} from '@harmowatch/ngx-redux-core'; // (1) Add the import

@NgModule({
    imports: [
        BrowserModule,
        ReduxModule.forRoot() // (2) Add the root module to the list of imports
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

> Note: Make sure you've called `forRoot` once, otherwise you might end up with different instances of the service(s).

### 2. Create a interface representing your module state

Ok, now you've to create a interface to describe the structure of your module state.

###### Example 

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
not be sure that your name is unique enough, then you can add a unique id to it. *As in the example shown below*. 
Furthermore the configuration accepts one more configuration property called `reducers`, but let's talk about that one
later on.

##### ... implements `ReduxStateInterface`

The `@ReduxState` decorator is only valid for classes which implement the `ReduxStateInterface`. As you can see it's an
generic interface where you've to provide your previously created `ChildModuleStateInterface`. The `ReduxStateInterface`
compels you to implement a public method `getInitialState`. The method is responsible to know, how the initial state can
be computed and will return it as an `Promise`, `Observable` or a plain implementation of the state interface directly.

> Note: The method `getInitialState` is called by *ngx-redux* automatically and your module will be registered **after**
the initial state was resolved successfully. If you return a unresolved `Promise` your module is never registered! 
 
###### Example 

```ts
import {Injectable} from '@angular/core'; // (1) Add the import
import {ReduxState, ReduxStateInterface} from '@harmowatch/ngx-redux-core'; // (2) Add the imports
import {ChildModuleStateInterface} from './child-module-state.interface'; // (3) Import your state interface

@ReduxState({ // (4) Add the decorator
  name: 'child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72' // (5) Provide a unique name for your state
})
@Injectable() // (6) Make it injectable
export class ChildModuleState implements ReduxStateInterface<ChildModuleStateInterface> { // (7) Implement the interface

  getInitialState(): StateInterface { // (8) Implement the method
    return { // You can return a promise or a observable as well 
      todo: {
        items: ['Item 1', 'Item 2'],
      }
    };
  }

}
```

### 4. Import the child `ReduxModule`:

The next thing you need to do, is to register your child NgModule as an *ngx-redux* module. To do that you just have to
add `ReduxModule.forChild` to the list of imports. The static `forChild` method requires one configuration argument to 
be given. The configuration object has one required property `state` where you have to provide a reference to the 
type of the freshly created `ChildModuleState`. **Don't use the interface here!**

###### Example

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReduxModule} from '@harmowatch/ngx-redux-core'; // (1) Add the import
import {ChildModuleState} from './child-module-state'; // (2) Add the import

@NgModule({
    imports: [
        BrowserModule,
        ReduxModule.forChild({ // (3) Add the redux child module to the list of imports
          state: ChildModuleState // (4) Provide a reference to the state class
        })
    ],
    bootstrap: [AppComponent]
})
export class ChildModule { }
```

Your redux module is ready to run now. Once your initial state was resolved, your redux module is registered to the 
global redux state like this:
                                       
```json
{
 "child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72": {
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

To select values from the state you can choose between three options:

- the select pipe
- the select annotation
- the select class

Each selector will accept a relative *todo/items* or an absolute path 
*/child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items*. It's recommended to use relative paths only. The 
absolute path is only available to give you a maximum of flexibility.

#### 5.1 Using the `reduxSelect` pipe

The easiest way to get values from the state, is to use the `reduxSelect` pipe together with Angular's `async` pipe.

###### Example

```angular2html
<pre>{{ 'todo/items' | reduxSelect | async | json }}</pre>
```

or using an absolute path:

```angular2html
<pre>{{ '/child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items' | reduxSelect | async | json }}</pre> 
``` 

#### 5.2 Using the `@ReduxSelect` annotation

If you want to access the data in your class  

###### Example

```ts
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReduxSelect} from '@harmowatch/ngx-redux-core'; // (1) Add the import
import {ChildModuleState} from './child-module-state'; // (2) Add the import

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {

  @ReduxSelect( // (3) Decorate the class property
    'todo/items', // (4) Pass in the relative path
    ChildModuleState // (5) Pass in a reference to the state where you want to select from
  ) 
  private todoItems: Observable<string[]>;

}
```

or using an absolute path:

```ts
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReduxSelect} from '@harmowatch/ngx-redux-core'; // (1) Add the import

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {

  @ReduxSelect( // (3) Decorate the class property
    '/child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items', // (4) Pass in the absolute path
  ) // (5) Note: When you use absolute paths you don't need to provide the state reference   
  private todoItems: Observable<string[]>;

}
```

#### 5.3 Using the `ReduxStateSelector` class

###### Example

```ts
import {ReduxStateSelector} from '@harmowatch/ngx-redux-core'; // (1) Add the import
import {ChildModuleState} from './child-module-state'; // (2) Add the import

// (3) Instantiate the selector
const selector = new ReduxStateSelector('todo/items', ChildModuleState);

selector.getObservable(); // (recommended)
selector.getSubject();
selector.getBehaviorSubject(['Initial TodoItems']);
selector.getReplaySubject();
```

or using an absolute path:

```ts
import {ReduxStateSelector} from '@harmowatch/ngx-redux-core'; // (1) Add the import

// (2) Instantiate the selector
const selector = new ReduxStateSelector('/child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72/todo/items');

selector.getObservable(); // (recommended)
selector.getSubject();
selector.getBehaviorSubject(['Initial TodoItems']);
selector.getReplaySubject();
```

### 6. Dispatch an action

To dispatch an action is very easy. Just annotate your class method by `@ReduxAction`. Everytime your method is called 
*ngx-redux* will dispatch a redux action for you automatically! The `return` value of the decorated method will become
the payload of the dispatched action and the name of the method is used as the action type.

> Note: It's very useful to write a provider, where the action method(s) are delivered by. See the example below. 

###### Example

```ts
import { Injectable } from '@angular/core'; // (1) Add the import
import { ReduxAction } from '@harmowatch/ngx-redux-core'; // (2) Add the import

@Injectable() // (3) Make it injectable
class TodoActionsProvider {

  @ReduxAction() // (4) Add the annotation
  add(todo: string) : string {
    return todo;
  }

}
```

Now you can inject the provider somewhere:

###### Example

```ts
import { Injectable } from '@angular/core'; // (1) Add the import
import { TodoActionsProvider } from 'path-to-the-provider.ts'; // (2) Add the import

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {

  constructor(public todoActions: TodoActionsProvider) { // (3) Add it as constructor argument
  }

  public onAddTodoButtonClick() {
    this.todoActions.add('SomeTodo'); // (4) Call the action method
  }
}

```

Ok, when the `TodoActionsProvider`'s method `add` is called *ngx-redux* will dispatch the following redux action:

```json
{
  "type": "add",
  "payload": "SomeTodo" 
}
```

Ok that's cool, but there's no information in the action type that this was a todo action, right?
But don't worry we can fix that very easy.

#### By providing a configuration object to `@ReduxAction`

###### Example

```ts
import { Injectable } from '@angular/core';
import { ReduxAction } from '@harmowatch/ngx-redux-core';

@Injectable()
class TodoActionsProvider {

  @ReduxAction({
    type: 'todo/add' // (1) Provide a type name
  })
  add(todo: string) : string {
    return todo;
  }

}
```

Then the payload will look like this:

```json
{
  "type": "todo/add",
  "payload": "SomeTodo" 
}
```

#### Or by using the `@ReduxActionContext` decorator (recommended)

###### Example

```ts
import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core'; // (1) Add the import

@Injectable()
@ReduxActionContext({ // (2) Add the annotation
  prefix: 'todo' // (3) Provide a prefix
})
class TodoActionsProvider {

  @ReduxAction()
  add(todo: string) : string {
    return todo;
  }

}
```

Then the payload will look like this:

```json
{
  "type": "todo/add",
  "payload": "SomeTodo" 
}
```

### 7. Reduce the state

Ok, now we can read the values from the state, but have no possibility to manipulate them. We want to change this
in this step by creating a reducer class.

###### Example

```ts
import { ReduxReducer, ReduxActionInterface } from '@harmowatch/ngx-redux-core'; // (1) Add the import
import { TodoActionsProvider } from 'path-to-the-provider.ts'; // (2) Add the import
import { ChildModuleStateInterface } from './child-module-state.interface'; // (3) Add the import

class TodoActionsReducer {

  @ReduxReducer(TodoActionsProvider.prototype.add) // (4) Add the annotation and provide a reference to the action method.
  add(state: ChildModuleStateInterface, action: ReduxActionInterface<string>) {
    return { // (5) Return a reduced state
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
import { Injectable } from '@angular/core';
import { ReduxState, ReduxStateInterface } from '@harmowatch/ngx-redux-core';
import { ChildModuleStateInterface } from './child-module-state.interface';
import { TodoActionsReducer } from 'path-to-the-reducer.ts'; // (1) Add the import

@ReduxState({
  name: 'child-module-7c66b613-20bd-4d35-8611-5181ca4a0b72',
  reducers: [TodoActionsReducer] // (2) Wire the reducer class to the state
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