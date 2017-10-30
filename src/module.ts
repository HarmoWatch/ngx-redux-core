import { CommonModule } from '@angular/common';
import { Inject, Injector, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { createStore, Store, StoreEnhancer } from 'redux';
import { MetadataManager } from './metadata/manager';

import { ReduxModuleChildConfig } from './module/child/config';
import { ReduxModuleRootConfig } from './module/root/config';
import { ReduxModuleRootReducer } from './module/root/reducer';
import { ReduxReducerDecoratorMetadata } from './reducer/decorator/metadata';
import { Registry } from './registry';

import { ReduxSelectPipe } from './select/pipe';
import { StateDefinition } from './state/definition';
import { StateDefToken } from './state/definition/token';
import { ReduxStore } from './store/token';

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

  constructor(@Optional() @Inject(StateDefToken) stateDef: StateDefinition = null,
              @Optional() @Inject(ReduxStore) store: Store<{}> = null,
              private injector: Injector) {

    if (store) {
      Registry.registerStore(store);
    }

    if (stateDef) {
      this.initState(stateDef);
    }

  }

  private initState(stateDef: StateDefinition) {
    Registry.registerState(this.injector.get(stateDef.provider));

    if (stateDef.reducers) {
      const stateMetadata = MetadataManager.getStateMetadata(stateDef.provider);

      stateDef.reducers
        .map((reducer) => MetadataManager.getReducerMetadata(reducer.constructor))
        .forEach((metadata: ReduxReducerDecoratorMetadata) => {
          metadata.reducers.forEach(reducer => {
            Registry.registerReducer(stateMetadata.name, reducer.types, reducer.reducer);
          });
        });
    }
  }

  public static forChild(config: ReduxModuleChildConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: StateDefToken, useValue: config.state || null},
        config.state ? config.state.provider : null,
      ],
    };
  }

  public static forRoot(config: ReduxModuleRootConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        config.store || {provide: ReduxStore, useFactory: ReduxModule.defaultStoreFactory},
        {provide: StateDefToken, useValue: config.state || null},
        config.state ? config.state.provider : null,
      ],
    };
  }

  private static defaultStoreFactory(): Store<{}> {
    return createStore(
      ReduxModuleRootReducer.reduce,
      {},
      ReduxModule.defaultEnhancerFactory(),
    );
  }

  private static defaultEnhancerFactory(): StoreEnhancer<{}> {
    if (console && window[ '__REDUX_DEVTOOLS_EXTENSION__' ]) {
      return window[ '__REDUX_DEVTOOLS_EXTENSION__' ]();
    }

    return null;
  }

}
