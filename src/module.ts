import { CommonModule } from '@angular/common';
import { Inject, Injector, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { createStore } from 'redux';

import { ReduxModuleChildConfig } from './module/child/config';
import { REDUX_MODULE_CHILD_CONFIG } from './module/child/token';
import { ReduxModuleRootConfig } from './module/root/config';
import { REDUX_MODULE_ROOT_CONFIG } from './module/root/token';
import { IS_ROOT_MODULE } from './module/token';

import { ReduxSelectPipe } from './pipe/select/select';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';

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
              injector: Injector) {

    if (isRootModule) {
      rootConfig = Object.assign({
        store: null,
      }, rootConfig || {});

      ReduxRegistry.registerStore(rootConfig.store || createStore(rootReducer, {}));
    } else {
      ReduxRegistry.registerState(injector.get(childConfig.state));
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
