###### [@harmowatch/ngx-redux-core](../../README.md) / [articles](./index.md)

# The Select Pattern

The select pattern allows you to get slices of your state as `ReduxSelector`. The `ReduxSelector`
is a class which extends [RxJS](https://github.com/ReactiveX/rxjs)'s `ReplaySubject`. The 
`bufferSize` of the `ReplaySubject` is set to 1. The `ReplaySubject` has the advantage that you
get the current state value immediately when subscribing to the `ReduxSelector`.

Because that the ReduxSelector is based on the `ReplaySubject`, you have all the power of 
[RxJS](https://github.com/ReactiveX/rxjs) at your fingertips.

To select a value, you must always specify a path. That path is separated by a "/". If your selector starts
with a "/" it's called **absolute selector**, otherwise it's an **relative selector**. The difference is that 
in case of an **absolute selector** you have to know the name of the [ReduxStateProvider](../api/redux-state-provider.md).

Therefore it's recommended to use always a **relative selector**, otherwise you will spread the name over the whole 
program code. I just wanted to mention the **absolute selector**, so you know it exists.

Let's suppose, you have defined the following [ReduxStateProvider](../api/redux-state-provider.md):

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

Then you can use the following selectors:

| **relative selector** (recommended) | **absolute selector** (avoid)  |
| ----------------------------------- | ------------------------------ |
| ""                                  | "/your-module"                 |
| "todo"                              | "/your-module/todo"            |
| "todo/items"                        | "/your-module/todo/items"      |
| "todo/isFetching"                   | "/your-module/todo/isFetching" |

## The reduxSelect pipe

You can select values direct out of your view. This is very comfortable to use, because you don't have 
to create a class property in your component class. To select the value, the pipe will use the 
[ReduxStateProvider](../api/redux-state-provider.md#select)'s `select` method.

```angular2html
<ul>
  <li *ngFor="let todo of ('todo/items' | reduxSelect | async)">
    {{todo}}
  </li>
</ul>
```

## The @ReduxSelect decorator

The `@ReduxSelect` decorator can be added to any class property. It will turn the property into an `ReduxSelector` 
as described above. Unfortunately, the `@ReduxSelect` decorator cannot automatically determine the correct
[ReduxStateProvider](../api/redux-state-provider.md). Therefore, you have to specify it as second argument.

To select the value, the decorator will use the [ReduxStateProvider](../api/redux-state-provider.md#select)'s 
`select` method.

If you use an **absolute selector**, you can omit the second argument, which is ignored anyway.

```ts
class SomeClass {

  @ReduxSelect('todo/items', YourModuleStateProvider)
  private todoItems: ReduxSelector<string[]>;
  
  constructor() {
    this.todoItems.subscribe(todoItems => {
      console.log('todo items', todoItems);
    });
  }
  
}
```

## The ReduxStateProvider

Another simple way to select state values is the [ReduxStateProvider](../api/redux-state-provider.md). 
You can simply inject it via Angular's dependency injector.

```ts
@Component({
  templateUrl: './some.component.html',
})
class SomeComponent {

  constructor(state: YourModuleStateProvider) {
    state.select('todo/items').subscribe(todoItems => {
      console.log('todo items', todoItems);
    });
  }
  
}
```

## The ReduxSelector

You can instantiate the `ReduxSelector` by yourself. As with the decorator, the [ReduxStateProvider](../api/redux-state-provider.md#select)
cannot be determined automatically even with manual instantiation. Therefore, you have to specify it as second argument.
If you instantiate the `ReduxSelector` by yourself, the [ReduxStateProvider](../api/redux-state-provider.md#select)'s 
`select` method is **not** used.
                                                            
If you use an **absolute selector**, you can omit the second argument, which is ignored anyway.

```ts
class SomeClass {

  constructor() {
    new ReduxSelector('todo/items', YourModuleStateProvider).subscribe(todoItems => {
      console.log('todo items', todoItems);
    });
  }
  
}
```
