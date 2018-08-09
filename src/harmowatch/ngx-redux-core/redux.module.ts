import { applyMiddleware, compose, createStore, Middleware, Store, StoreEnhancer } from 'redux';

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
import { ReduxMiddlewares } from './tokens/redux-middlewares.token';

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
              reducerProvider: ReduxReducerProvider,
              @Optional() @Inject(ReduxStateDefinitionToken) stateDefs: ReduxStateDefinition[] = []) {

    injector.get(ReduxRegistry); // just make sure the provider is instantiated

    if (Array.isArray(stateDefs)) {
      stateDefs
        .filter(def => def && def.provider)
        .map(def => injector.get(def.provider))
        .forEach(provider => reducerProvider.addStateProvider(provider));
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
          deps: [ReduxReducerProvider, ReduxMiddlewares]
        },
        {provide: ReduxStateDefinitionToken, useValue: config.state || null, multi: true},
        {provide: ReduxMiddlewares, useValue: config.middlewareFunctions || [], multi: false},
      ],
    };
  }

  public static defaultStoreFactory(reduxReducerProvider: ReduxReducerProvider,
                                    middlewareFunctions: Middleware[],
                                    devMode = isDevMode()): Store<{}> {

    return createStore(
      reduxReducerProvider.rootReducer,
      {},
      ReduxModule.defaultEnhancerFactory(middlewareFunctions, devMode),
    );
  }

  public static defaultEnhancerFactory(middlewareFunctions: Middleware[], devMode: boolean): StoreEnhancer<{}> {

    let composeEnhancers = compose;

    if (devMode && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) {
      composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
    }

    return composeEnhancers(applyMiddleware(...middlewareFunctions));
  }

}
