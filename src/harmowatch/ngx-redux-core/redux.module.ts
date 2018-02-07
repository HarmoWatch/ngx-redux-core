import { createStore, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';

import { CommonModule } from '@angular/common';
import { Inject, Injector, isDevMode, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ReduxSelectPipe } from '@harmowatch/ngx-redux-core/pipes/redux-select.pipe';
import { ReduxReducerProvider } from '@harmowatch/ngx-redux-core/providers/redux-reducer.provider';
import { ReduxStateDefinitionToken } from '@harmowatch/ngx-redux-core/tokens/redux-state-definition.token';
import { ReduxStateDefinition } from '@harmowatch/ngx-redux-core/interfaces/redux-state-definition.interface';
import { ReduxRegistry } from '@harmowatch/ngx-redux-core/providers/redux-registry';
import { ReduxModuleChildConfig } from '@harmowatch/ngx-redux-core/interfaces/redux-child-module-config.interface';
import { ReduxModuleRootConfig } from '@harmowatch/ngx-redux-core/interfaces/redux-root-module-config.interface';
import { ReduxStore } from '@harmowatch/ngx-redux-core/tokens/redux-store.token';
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
              reducer: ReduxReducerProvider,
              @Optional() @Inject(ReduxStateDefinitionToken) stateDefs: ReduxStateDefinition[] = []) {

    injector.get(ReduxRegistry); // just make the the provider is instantiated

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
        {provide: ReduxStateDefinitionToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static forRoot(config: ReduxModuleRootConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        ReduxReducerProvider,
        ReduxRegistry,
        {
          provide: ReduxStore,
          useFactory: config.storeFactory || ReduxModule.defaultStoreFactory,
          deps: [ ReduxReducerProvider ]
        },
        {provide: ReduxStateDefinitionToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static defaultStoreFactory(reducer: ReduxReducerProvider): Store<{}> {
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
