import { CommonModule } from '@angular/common';
import { Inject, Injector, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { createStore } from 'redux';
import { MetadataManager } from './metadata/manager';

import { ReduxModuleChildConfig } from './module/child/config';
import { REDUX_MODULE_CHILD_CONFIG } from './module/child/token';
import { ReduxModuleRootConfig } from './module/root/config';
import { ReduxModuleRootReducer } from './module/root/reducer';
import { REDUX_MODULE_ROOT_CONFIG } from './module/root/token';
import { IS_ROOT_MODULE } from './module/token';
import { ReduxReducerDecoratorMetadata } from './reducer/decorator/metadata';
import { ReduxRegistry } from './registry';

import { ReduxSelectPipe } from './select/pipe';

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

  constructor(@Inject(IS_ROOT_MODULE) isRootModule: boolean = false,
              @Optional() @Inject(REDUX_MODULE_ROOT_CONFIG) rootConfig: ReduxModuleRootConfig = null,
              @Optional() @Inject(REDUX_MODULE_CHILD_CONFIG) childConfig: ReduxModuleChildConfig = null,
              private injector: Injector) {

    if (isRootModule) {
      rootConfig = Object.assign({
        store: null,
      }, rootConfig || {});

      ReduxRegistry.registerStore(rootConfig.store || createStore(ReduxModuleRootReducer.reduce, {}));
    }

    if (childConfig) {
      this.initChildConfig(childConfig);
    }

  }

  private initChildConfig(childConfig: ReduxModuleChildConfig) {
    if (childConfig.state) {
      ReduxRegistry.registerState(this.injector.get(childConfig.state));

      if (childConfig.reducers) {
        const stateMetadata = MetadataManager.getStateMetadata(childConfig.state);

        childConfig.reducers
          .map((reducer) => MetadataManager.getReducerMetadata(reducer.constructor))
          .forEach((metadata: ReduxReducerDecoratorMetadata) => {
            metadata.reducers.forEach(reducer => {
              ReduxRegistry.registerReducer(stateMetadata.name, reducer.types, reducer.reducer);
            });
          });
      }
    }

  }

  public static forChild(config: ReduxModuleChildConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        config.state,
        {provide: IS_ROOT_MODULE, useValue: false},
        {provide: REDUX_MODULE_CHILD_CONFIG, useValue: config},
      ],
    };
  }

  public static forRoot(config?: ReduxModuleRootConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: IS_ROOT_MODULE, useValue: true},
        {provide: REDUX_MODULE_ROOT_CONFIG, useValue: config},
      ],
    };
  }

}
