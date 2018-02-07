import { createStore, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';

import { CommonModule } from '@angular/common';
import { Inject, Injector, isDevMode, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ReduxSelectPipe } from '@harmowatch/ngx-redux-core/select/pipe';
import { ReducerProvider } from '@harmowatch/ngx-redux-core/reducer/reducer.provider';
import { StateDefToken } from '@harmowatch/ngx-redux-core/state/definition/token';
import { StateDefinition } from '@harmowatch/ngx-redux-core/state/definition';
import { Registry } from '@harmowatch/ngx-redux-core/registry';
import { ReduxModuleChildConfig } from '@harmowatch/ngx-redux-core/interfaces/redux-child-module-config.interface';
import { ReduxModuleRootConfig } from '@harmowatch/ngx-redux-core/interfaces/redux-root-module-config.interface';
import { ReduxStore } from '@harmowatch/ngx-redux-core/store/token';
import { ReduxTestingStore } from '@harmowatch/ngx-redux-core/testing/store';

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
})
export class ReduxModule {

  constructor(injector: Injector,
              reducer: ReducerProvider,
              @Optional() @Inject(StateDefToken) stateDefs: StateDefinition[] = []) {

    injector.get(Registry); // just make the the provider is instantiated

    if (Array.isArray(stateDefs)) {
      stateDefs
        .filter(def => def && def.provider)
        .map(def => injector.get(def.provider))
        .forEach(provider => reducer.addStateProvider(provider));
    }

  }

  public static forChild(config: ReduxModuleChildConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: StateDefToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static forRoot(config: ReduxModuleRootConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        ReducerProvider,
        Registry,
        {
          provide: ReduxStore,
          useFactory: config.storeFactory || ReduxModule.defaultStoreFactory,
          deps: [ ReducerProvider ]
        },
        {provide: StateDefToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static defaultStoreFactory(reducer: ReducerProvider): Store<{}> {
    return createStore(
      reducer.reduce.bind(reducer),
      {},
      ReduxModule.defaultEnhancerFactory(),
    );
  }

  public static defaultEnhancerFactory(): StoreEnhancer<{}> {
    if (console && window[ '__REDUX_DEVTOOLS_EXTENSION__' ] && isDevMode()) {
      return window[ '__REDUX_DEVTOOLS_EXTENSION__' ]();
    }

    return ReduxModule.noopEnhancer;
  }

  public static noopEnhancer(next: StoreEnhancerStoreCreator<{}>): StoreEnhancerStoreCreator<{}> {
    return next;
  }

}
