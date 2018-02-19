###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [pipes](./index.md)
 
# reduxSelect

Selects a value from the state directly out of your view. For the selection it will use your 
[ReduxStateProvider](../api/redux-state-provider.md#select)'s select method.

## Using a relative selector, second argument needed (recommended)

```angular2html
<ul>
  <li *ngFor="let todo of ('todo/listItems' | reduxSelect | async)">
    {{todo}}
  </li>
</ul>
```

## Select the same value using a absolute selector, no second argument needed (avoid)

```angular2html
<ul>
  <li *ngFor="let todo of ('/some-state-name/todo/listItems' | reduxSelect | async)">
    {{todo}}
  </li>
</ul>
```
