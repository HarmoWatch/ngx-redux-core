import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { createStore } from 'redux';
import { IReduxModuleChildConfig, IReduxModuleRootConfig } from './interfaces';
import { ReduxSelectPipe } from './pipe/select/select';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';
import { REDUX_CHILD_MODULE_CONFIG, REDUX_ROOT_MODULE_CONFIG } from './token';

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
export class ReduxRootModule {

  constructor(@Inject(REDUX_ROOT_MODULE_CONFIG) config: IReduxModuleRootConfig = null) {

    config = Object.assign({
      store: null,
    }, config || {});

    ReduxRegistry.registerStore(config.store || createStore(rootReducer, {}));

  }

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
export class ReduxChildModule {

}

export class ReduxModule {

  public static forChild(config: IReduxModuleChildConfig): ModuleWithProviders {
    return {
      ngModule: ReduxChildModule,
      providers: [
        {provide: REDUX_CHILD_MODULE_CONFIG, useValue: config},
      ],
    };
  }

  public static forRoot(config?: IReduxModuleRootConfig): ModuleWithProviders {
    return {
      ngModule: ReduxRootModule,
      providers: [
        {provide: REDUX_ROOT_MODULE_CONFIG, useValue: config},
      ],
    };
  }

}
