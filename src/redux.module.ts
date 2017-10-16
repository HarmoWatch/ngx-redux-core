import { CommonModule } from '@angular/common';
import { Inject, Injector, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { createStore } from 'redux';
import { IReduxModuleChildConfig, IReduxModuleRootConfig } from './interfaces';
import { ReduxSelectPipe } from './pipe/select/select';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';
import { IS_ROOT_MODULE, REDUX_CHILD_MODULE_CONFIG, REDUX_ROOT_MODULE_CONFIG } from './token';

export interface IReducerType {
  new (...args: any[]): any;
}

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
              @Optional() @Inject(REDUX_ROOT_MODULE_CONFIG) rootConfig: IReduxModuleRootConfig = null,
              @Optional() @Inject(REDUX_CHILD_MODULE_CONFIG) childConfig: IReduxModuleChildConfig = null,
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

  public static forChild(config: IReduxModuleChildConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        config.state,
        {provide: IS_ROOT_MODULE, useValue: false},
        {provide: REDUX_CHILD_MODULE_CONFIG, useValue: config},
      ],
    };
  }

  public static forRoot(config?: IReduxModuleRootConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: IS_ROOT_MODULE, useValue: true},
        {provide: REDUX_ROOT_MODULE_CONFIG, useValue: config},
      ],
    };
  }

}
