import { CommonModule } from '@angular/common';
import { Inject, Injector, isDevMode, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ReducerProvider } from '@harmowatch/ngx-redux-core/reducer/reducer.provider';
import { createStore, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';
import { ReduxCommonModule } from './common/module';

import { ReduxModuleChildConfig } from './module/child/config';
import { ReduxModuleRootConfig } from './module/root/config';
import { Registry } from './registry';
import { StateDefinition } from './state/definition';
import { StateDefToken } from './state/definition/token';
import { ReduxStore } from './store/token';

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
})
export class ReduxRootModule {

  constructor(@Inject(ReduxStore) store: Store<{}> = null,
              private reducer: ReducerProvider,
              private injector: Injector,
              @Optional() @Inject(StateDefToken) stateDefs: StateDefinition[] = []) {
    Registry.registerStore(store);

    stateDefs
      .filter(def => def && def.provider)
      .map(def => this.injector.get(def.provider))
      .forEach(provider => this.reducer.addStateProvider(provider));
  }

}

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
})
export class ReduxModule {

  constructor(@Optional() @Inject(StateDefToken) stateDefs: StateDefinition[] = [],
              private reducer: ReducerProvider,
              private injector: Injector) {

    stateDefs
      .filter(def => def && def.provider)
      .map(def => this.injector.get(def.provider))
      .forEach(provider => this.reducer.addStateProvider(provider));
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
      ngModule: ReduxRootModule,
      providers: [
        ReducerProvider,
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
