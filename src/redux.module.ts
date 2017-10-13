import { CommonModule } from '@angular/common';
import { Inject, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { createStore, Store } from 'redux';
import { ReduxSelectPipe } from './pipe/select/select';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';

export const REDUX_MODULE_CONFIG = new InjectionToken<IReduxConfig>('REDUX_MODULE_CONFIG');
export const IS_ROOT_MODULE = new InjectionToken<boolean>('IS_ROOT_MODULE');
export const STATENAME = new InjectionToken<boolean>('STATENAME');

export interface IReduxConfig {
  store?: Store<{}>;
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
              @Inject(REDUX_MODULE_CONFIG) config: IReduxConfig = null,) {

    if (isRootModule) {
      config = Object.assign({
        store: null,
      }, config || {});

      ReduxRegistry.registerStore(config.store || createStore(rootReducer, {}));
    }

  }

  public static forChild(stateName: string): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: IS_ROOT_MODULE, useValue: false},
        {provide: STATENAME, useValue: stateName},
      ],
    };
  }

  public static forRoot(config?: IReduxConfig): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [
        {provide: REDUX_MODULE_CONFIG, useValue: config},
        {provide: IS_ROOT_MODULE, useValue: true},
      ],
    };
  }

}
