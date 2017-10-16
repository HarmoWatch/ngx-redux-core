import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
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
              @Inject(REDUX_ROOT_MODULE_CONFIG) config: IReduxModuleRootConfig = null) {

    if (isRootModule) {
      config = Object.assign({
        store: null,
      }, config || {});

      ReduxRegistry.registerStore(config.store || createStore(rootReducer, {}));
    }

  }

  public static forChild(config: IReduxModuleChildConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
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
