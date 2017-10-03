import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { createStore, Store } from 'redux';
import { ReduxRegistry } from './registry';
import { rootReducer } from './root-reducer';

export interface IReduxConfig<S> {
  store?: Store<S>;
}

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
})
export class ReduxModule {

  // public static readonly ACTION_REGISTER_MODULE = `${ReduxModule.name}://registerModule`;

  constructor(injector: Injector) {
    // ReduxRegistry.modules.subscribe(moduleItem => {
    //   ReduxRegistry.getStore().then((store) => {
    //
    //     let initialState = {};
    //
    //     if (moduleItem.onReduxInit) {
    //       // const initialStateFromInit = moduleItem.onReduxInit();
    //       //
    //       // if (initialStateFromInit != null) {
    //       //   initialState = initialStateFromInit as {};
    //       // }
    //
    //       initialState = moduleItem.onReduxInit() || {};
    //     }
    //
    //     store.dispatch({
    //       payload: {
    //         initialState,
    //         stateName: moduleItem.constructor.name,
    //       },
    //       type: ReduxModule.ACTION_REGISTER_MODULE,
    //     });
    //
    //   });
    // });
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

  public static forRoot(config?): ModuleWithProviders {

    config = Object.assign({
      store: null,
    }, config || {});

    ReduxRegistry.registerStore(config.store || createStore(rootReducer, {}));

    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

}
