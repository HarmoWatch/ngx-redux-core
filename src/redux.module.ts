import { CommonModule } from '@angular/common';
import { Inject, InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { createStore, Store } from 'redux';
import { getReduxReducerClassMetadata, IReduxReducerClassMetadata } from './decorator/reducer/reducer';
import { IReduxState, IReduxStateType } from './decorator/state/state';
import { ReduxSelectPipe } from './pipe/select/select';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';

export const IS_ROOT_MODULE = new InjectionToken<boolean>('IS_ROOT_MODULE');
export const REDUX_MODULE_CONFIG = new InjectionToken<IReduxModuleRootConfig | IReduxModuleChildConfig>(
  'REDUX_MODULE_CONFIG',
);

export interface IReduxModuleRootConfig {
  store?: Store<{}>;
}

export interface IReduxModuleChildConfig {
  state: IReduxStateType;
}

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
  providers: [],
})
export class ReduxModule {

  constructor(@Inject(IS_ROOT_MODULE) isRootModule: boolean = false,
              @Inject(REDUX_MODULE_CONFIG) config: IReduxModuleRootConfig = null,) {

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
        {provide: REDUX_MODULE_CONFIG, useValue: config},
      ],
    };
  }

  public static forRoot(config?: IReduxModuleRootConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: REDUX_MODULE_CONFIG, useValue: config},
        {provide: IS_ROOT_MODULE, useValue: true},
      ],
    };
  }

}
