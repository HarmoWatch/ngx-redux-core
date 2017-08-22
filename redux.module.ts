import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Reducer, StoreEnhancer } from 'redux';
import { logger } from 'redux-logger';
import { IConstructableStoreProvider, IRootState } from './interfaces';
import { StoreProvider } from './provider/root-store.provider';
import { ReduxModuleItem } from './redux-module-item';
import { ReduxActions } from './redux.actions';

export interface IPayloadRegisterModule {
  initialState: {};
  stateName: string;
}

export interface IReduxModuleItem<T = {}> {
  initialState: T;
  stateName: string;
  reducer: Reducer<T>;
}

export interface IStoreConfig<S> {
  enhancer?: StoreEnhancer<S>;
  store?: IConstructableStoreProvider<S>;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class ReduxModule {

  public static readonly ACTION_REGISTER_MODULE = `${ReduxModule.name}://registerModule`;

  constructor(store: StoreProvider) {
    ReduxModuleItem.onRegister$.subscribe(moduleItem => {
      store.dispatch({
        payload: {
          initialState: moduleItem.initialState,
          stateName: moduleItem.stateName,
        },
        type: ReduxModule.ACTION_REGISTER_MODULE,
      });

      moduleItem.actions
        .map(action => action.prototype)
        .filter(proto => !!proto)
        .forEach((proto) => {
          proto.reduxActionCalls.subscribe((a) => store.dispatch(a));
        });
    });
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

  public static forRoot<T = IRootState>(config?: IStoreConfig<T>): ModuleWithProviders {

    const storeProvider = {
      provide: StoreProvider,
      useFactory: () => {
        if (config.store) {
          return new config.store(config);
        }

        return new StoreProvider(config as {} as IStoreConfig<IRootState>);
      },
    };

    return {
      ngModule: ReduxModule,
      providers: [
        storeProvider,
      ],
    };
  }

}
