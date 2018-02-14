###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [how to](./index.md)
 
# Use Lazy Loading

As described in the [Angular - Router & Navigation](https://angular.io/guide/router#asynchronous-routing) docs,
it possible to load a [Angular Module](https://angular.io/guide/ngmodules) asynchronously. To use this together 
with `@harmowatch/ngx-redux-core` you just have to use the static `ReduxModule.forChild()` method in your lazy loaded module.

Make sure you've initialized the `ReduxModule.forRoot()` module in your app module as well.

## Example

*app.module.ts* (The root NgModule)

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReduxModule } from '@harmowatch/ngx-redux-core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot(), // import the ReduxModule.forRoot() without a state definition
    RouterModule.forRoot([
      {path: 'todo', loadChildren: './todo/todo.module#TodoModule'}, // lazy load you child module
      {path: '', redirectTo: 'todo', pathMatch: 'prefix'},
    ], {useHash: true})
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

*todo.module.ts* (The lazy loaded NgModule)

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReduxModule } from '@harmowatch/ngx-redux-core';

import { TodoListComponent } from './list/todo-list.component';
import { TodoListReducer } from './list/todo-list.reducer';
import { TodoModuleStateProvider } from './todo.module.state.provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReduxModule.forChild({ // use forChild instead of forRoot in lazy loaded modules
      state: {
        provider: TodoModuleStateProvider,
        reducers: [ TodoListReducer ],
      }
    }),
    RouterModule.forChild([
      {path: '', component: TodoListComponent},
    ]),
  ],
  declarations: [TodoListComponent],
  providers: [TodoModuleStateProvider]
})
export class TodoModule { }
```

For more information, please see the [example app](https://github.com/HarmoWatch/ngx-redux-core/tree/master/src/example-app)
