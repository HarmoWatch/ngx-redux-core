import { CommonModule } from '@angular/common';
import { Inject, Injector, isDevMode, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { createStore, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';
import { ReduxCommonModule } from './common/module';
import { MetadataManager } from './metadata/manager';

import { ReduxModuleChildConfig } from './module/child/config';
import { ReduxModuleRootConfig } from './module/root/config';
import { ReduxModuleRootReducer } from './module/root/reducer';
import { Registry } from './registry';
import { StateDefinition } from './state/definition';
import { StateDefinitionManager } from './state/definition/manager';
import { StateDefToken } from './state/definition/token';
import { ReduxStore } from './store/token';

@NgModule({
  imports: [
    ReduxCommonModule,
    CommonModule,
  ],
})
export class ReduxModule {

  private static knownStateDefinitions: { [name: string]: StateDefinition } = {};

  constructor(@Optional() @Inject(StateDefToken) stateDefs: StateDefinition[] = [],
              @Optional() @Inject(ReduxStore) store: Store<{}> = null,
              private injector: Injector) {

    if (store) {
      Registry.registerStore(store);
    }

    stateDefs
      .filter(stateDef => !!stateDef)
      .map(stateDef => {
        return {
          metadata: MetadataManager.getStateMetadata(stateDef.provider),
          stateDef,
        }
      })
      .filter(({metadata}) => !ReduxModule.knownStateDefinitions[metadata.name])
      .forEach(({metadata, stateDef}) => {
        this.initState(stateDef);
        ReduxModule.knownStateDefinitions[metadata.name] = stateDef;
      });
  }

  private initState(stateDef: StateDefinition) {
    Registry.registerState(this.injector.get(stateDef.provider));
    StateDefinitionManager.registerReducers(stateDef);
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
      ngModule: ReduxModule,
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

    return ReduxModule.nullEnhancer;
  }

  public static nullEnhancer(next: StoreEnhancerStoreCreator<{}>): StoreEnhancerStoreCreator<{}> {
    return next;
  }

}
