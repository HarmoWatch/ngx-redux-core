###### @harmowatch/ngx-redux-core / [decorators](./index.md)
 
# @ReduxReducer

Marks a class method as redux reducer and wires the reducer method against one or many redux actions.

```ts
@ReduxAction(string|string[]|Function|Function[])
```

## Reference variants

### By prototype

The recommended and simplest way is to wire the reducer directly via the prototype with the action method. Here you have the 
advantage that TypeScript can validate the return value of the ReduxAction against the expected payload of your Reducer 
function. This is also the only way to enable IDE refactoring.

![TypeScript support](../ts-support.gif "TypeScript support")

```ts
class SomeReducerClass {

  @ReduxReducer(SomeActionClass.prototype.addItem) // addItem returns string
  public addItem(state: SomeState, action: ReduxActionWithPayload<string>): SomeState {
    return {
       ...state,
       items: state.items.concat(action.payload),
     };
  }
  
}
```

The reducer can also listen to several actions at the same time:

```ts
class SomeReducerClass {

  @ReduxReducer([
    SomeActionClass.prototype.addItem, // addItem returns string
    SomeActionClass.prototype.addDefaultItem, // addDefaultItem returns string
  ])
  public addItem(state: SomeState, action: ReduxActionWithPayload<string>): SomeState {
    return {
       ...state,
       items: state.items.concat(action.payload),
     };
  }
  
}
```

Or you can decorate the reducer method two times:

```ts
class SomeReducerClass {

  @ReduxReducer(SomeActionClass.prototype.addItem) // addItem returns string
  @ReduxReducer(SomeActionClass.prototype.addDefaultItem) // addDefaultItem returns string
  public addItem(state: SomeState, action: ReduxActionWithPayload<string>): SomeState {
    return {
       ...state,
       items: state.items.concat(action.payload),
     };
  }
  
}
```

The array notation and the TypeScript type check currently only works well with actions which return the same type.
So if you have something like this, TypeScript will throw an type error.

```ts
class SomeReducerClass {

  @ReduxReducer([
    SomeActionClass.prototype.addItem, // addItem returns string
    SomeActionClass.prototype.addItems // addItems returns string[]
  ])
  public addItem(state: SomeState, action: ReduxActionWithPayload<string | string[]>): SomeState {
    return {
       ...state,
       items: state.items.concat(action.payload),
     };
  }
  
}
```

But you can fall back to the following solution:

```ts
class SomeReducerClass {

  @ReduxReducer(SomeActionClass.prototype.addItem) // addItem returns string
  @ReduxReducer(SomeActionClass.prototype.addItems) // addItems returns string[]
  public addItem(state: SomeState, action: ReduxActionWithPayload<string | string[]>): SomeState {
    return {
       ...state,
       items: state.items.concat(action.payload),
     };
  }
  
}
```

### By string

It is also possible to refer directly to an action by string. However, this option should only be used if there 
is no other option. You can also specify this as an array or decorate the method twice.

```ts
class SomeReducerClass {

  @ReduxReducer('some-action-type')
  public addItem(state: SomeState, action: ReduxActionWithPayload<string>): SomeState {
    return {
       ...state,
       items: state.items.concat(action.payload),
     };
  }
  
}
```

## Activation

Don't forget to activate your reducer! You've to add the reducer class to the reducers array like this:

```ts
@NgModule({
  imports: [
    ReduxModule.forRoot({
      state: {
        provider: SomeStateProvider,
        reducers: [ SomeReducerClass ],
      }
    }),
  ],
  providers: [SomeStateProvider]
})
```
