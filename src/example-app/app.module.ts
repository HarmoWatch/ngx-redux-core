import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReduxModule } from '../harmowatch/ngx-redux-core/redux.module';
import { ReduxActionWithPayload } from '../harmowatch/ngx-redux-core';

const logger = store => next => (action: ReduxActionWithPayload) => {

  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());

  return result;

};
​
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot({
      middlewareFunctions: [logger]
    }),
    RouterModule.forRoot([
      {path: 'todo', loadChildren: './todo/todo.module#TodoModule'},
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
