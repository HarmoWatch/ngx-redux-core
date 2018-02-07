import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReduxModule } from '../harmowatch/ngx-redux-core/redux.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot(),
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
