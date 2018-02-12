###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [decorators](./index.md)
 
# @ReduxSelect

Selects a value from the state and injects the value as `Observable` into the decorated class property. Please note that 
you can also inject your [`ReduxStateProvider`](../api/redux-state-provider.md) in your class. The provider also offers a 
`select` method, which you can use to read the value from the state.

```ts
@ReduxSelect(
  string,
  Type<ReduxStateProvider>
)
```

The decorator expects two arguments, whereby the second argument only has to be given, when you use a relative selector. 
The following examples should illustrate the usage very well. 

## Using a relative selector

```ts
class SomeClass {

  @ReduxSelect('todo/listItems', SomeStateProvider)
  private someSelection: Observable<string[]>;
  
}
```

## Select the same value using a absolute selector

```ts
class SomeClass {

  @ReduxSelect('/some-state-name/todo/listItems')
  private someSelection: Observable<string[]>
  
}
```
