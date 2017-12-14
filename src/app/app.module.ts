import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModuleClassDecorator } from '@harmowatch/redux-core';
import { ReduxModule } from '../ngx-redux/module';

import { AppComponent } from './app.component';
import { AppModuleStateProvider } from './app.module.state.provider';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot(),
  ],
  providers: [
    AppModuleStateProvider,
  ],
  bootstrap: [ AppComponent ]
})
@ReduxModuleClassDecorator({
  state: AppModuleStateProvider,
  reducers: [],
})
export class AppModule {
}
