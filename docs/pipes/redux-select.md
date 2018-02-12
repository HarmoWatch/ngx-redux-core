###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [pipes](./index.md)
 
# reduxSelect

Selects a value from the state directly out of your view. For the selection it will use your 
[ReduxStateProvider](../api/redux-state-provider.md#select)'s select method.

```angular2html
<ul>
  <li *ngFor="let todo of ('todo/listItems' | reduxSelect | async)">
    {{todo}}
  </li>
</ul>
```
