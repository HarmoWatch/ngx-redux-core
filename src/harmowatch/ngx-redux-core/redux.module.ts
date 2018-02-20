import { createStore, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';

import { CommonModule } from '@angular/common';
import { Inject, Injector, isDevMode, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ReduxSelectPipe } from './pipes/redux-select.pipe';
import { ReduxReducerProvider } from './providers/redux-reducer.provider';
import { ReduxStateDefinitionToken } from './tokens/redux-state-definition.token';
import { ReduxStateDefinition } from './interfaces/redux-state-definition.interface';
import { ReduxRegistry } from './providers/redux-registry';
import { ReduxChildModuleConfig } from './interfaces/redux-child-module-config.interface';
import { ReduxRootModuleConfig } from './interfaces/redux-root-module-config.interface';
import { ReduxStore } from './tokens/redux-store.token';

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

    injector.get(ReduxRegistry); // just make sure the provider is instantiated

    if (Array.isArray(stateDefs)) {
      stateDefs
        .filter(def => def && def.provider)
        .map(def => injector.get(def.provider))
        .forEach(provider => reducer.addStateProvider(provider));
    }

  }

  public static forChild<S = {}>(config: ReduxChildModuleConfig<S> = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: ReduxStateDefinitionToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static forRoot<S = {}>(config: ReduxRootModuleConfig<S> = {}): ModuleWithProviders {
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

  public static defaultStoreFactory(reducer: ReduxReducerProvider, devMode = isDevMode()): Store<{}> {
    return createStore(
      reducer.reduce.bind(reducer),
      {},
      ReduxModule.defaultEnhancerFactory(devMode),
    );
  }

  public static defaultEnhancerFactory(devMode: boolean): StoreEnhancer<{}> {
    if (window[ '__REDUX_DEVTOOLS_EXTENSION__' ] && devMode) {
      return window[ '__REDUX_DEVTOOLS_EXTENSION__' ]();
    }

    return ReduxModule.noopEnhancer;
  }

  public static noopEnhancer(next: StoreEnhancerStoreCreator<{}>): StoreEnhancerStoreCreator<{}> {
    return next;
  }

}
