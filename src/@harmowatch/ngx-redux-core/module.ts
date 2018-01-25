import { CommonModule } from '@angular/common';
import { Inject, isDevMode, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { createStore, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';
import { ReduxCommonModule } from './common/module';

import { ReduxModuleChildConfig } from './module/child/config';
import { ReduxModuleRootConfig } from './module/root/config';
import { ReduxModuleRootReducer } from './module/root/reducer';
import { Registry } from './registry';
import { StateDefinition } from './state/definition';
import { StateDefinitionManager } from './state/definition/manager';
import { StateDefToken } from './state/definition/token';
import { ReduxStore } from './store/token';

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    StateDefinitionManager,
  ]
})
export class ReduxRootModule {

  constructor(@Inject(ReduxStore) store: Store<{}> = null,
              private stateDefinitionManager: StateDefinitionManager,
              @Optional() @Inject(StateDefToken) stateDefs: StateDefinition[] = []) {
    Registry.registerStore(store);
    this.stateDefinitionManager.add(stateDefs);
  }

}

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    StateDefinitionManager,
  ]
})
export class ReduxModule {

  constructor(@Optional() @Inject(StateDefToken) stateDefs: StateDefinition[] = [],
              private stateDefinitionManager: StateDefinitionManager) {

    this.stateDefinitionManager.add(stateDefs);
  }

  public static forChild(config: ReduxModuleChildConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: StateDefToken, useValue: config.state || null, multi: true},
        config.state ? config.state.provider : null,
      ],
    };
  }

  public static forRoot(config: ReduxModuleRootConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxRootModule,
      providers: config.state ? [
        {provide: ReduxStore, useFactory: config.storeFactory || ReduxModule.defaultStoreFactory},
        {provide: StateDefToken, useValue: config.state || null, multi: true},
        config.state ? config.state.provider : null,
      ] : [
        {provide: ReduxStore, useFactory: config.storeFactory || ReduxModule.defaultStoreFactory},
        {provide: StateDefToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static defaultStoreFactory(): Store<{}> {
    return createStore(
      ReduxModuleRootReducer.reduce,
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
