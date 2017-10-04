import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { createStore, Store } from 'redux';
import { ReduxSelectPipe } from './pipe/select/select';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';

export interface IReduxConfig {
  store?: Store<{}>;
}

@NgModule({
  declarations: [
    ReduxSelectPipe,
  ],
  exports: [
    ReduxSelectPipe,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class ReduxModule {

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

  public static forRoot(config?: IReduxConfig): ModuleWithProviders {

    config = Object.assign({
      store: null,
    }, config || {});

    ReduxRegistry.registerStore(config.store || createStore(rootReducer, {}));

    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

}
