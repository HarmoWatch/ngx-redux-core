import { ModuleWithProviders, NgModule } from '@angular/core';
import { createStore, Store } from 'redux';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';

export interface IReduxConfig {
  store?: Store<{}>;
}

@NgModule({
  declarations: [],
  imports: [],
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
