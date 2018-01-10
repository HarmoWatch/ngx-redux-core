import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReduxModule } from '../ngx-redux/module';

import { AppComponent } from './app.component';

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
    ])
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
