# [WIP] ngx-redux 

Hey there, the package is still work in progress, but there are no more major changes planned. So the package is ready 
to use now, but please [check the open the open tasks](https://github.com/HarmoWatch/ngx-redux/projects/1).

## Decorator driven redux integration for Angular 2+

* [Installation](#installation)
* [Usage](#usage)
* Pipe
  * [reduxSelect](src/pipe/select/select.md)
* Decorator
  * [@Redux](src/decorator/redux/redux.md)
  * [@ReduxAction](src/decorator/action/action.md)
  * [@ReduxReducer](src/decorator/reducer/reducer.md)
  * [@ReduxSelect](src/decorator/select/select.md)

## Installation

This package requires `redux >=3.0.0` as peer dependency. So let's install it first:

```sh
npm install redux --save
```

Now you're ready to install `@harmowatch/ngx-redux-core` by typing:

```sh
npm install @harmowatch/ngx-redux-core --save
```

## Usage

#### 1. Import the `ReduxModule`

Ok, now you have to import `ReduxModule.forRoot()` in the root NgModule of your application:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule } from '@harmowatch/ngx-redux-core'; // (1) Import the decorator and the module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot(), // (2) Add the module to the list of imports
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

#### 2. Decorate the module where you want to use redux with `@Redux`

The decorator `@Redux` registers your module to the global redux context.

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