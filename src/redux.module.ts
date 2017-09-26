import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { ReduxRegistry } from './registry';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
})
export class ReduxModule {

  public static readonly ACTION_REGISTER_MODULE = `${ReduxModule.name}://registerModule`;

  constructor(injector: Injector) {
    ReduxRegistry.modules.subscribe(moduleItem => {
      ReduxRegistry.getStore().then((store) => {

        let initialState = {};

        if (moduleItem.onReduxInit) {
          const initialStateFromInit = moduleItem.onReduxInit();

          if (initialStateFromInit != null) {
            initialState = initialStateFromInit as {};
          }
        }

        store.dispatch({
          payload: {
            initialState,
            stateName: moduleItem.constructor.name,
          },
          type: ReduxModule.ACTION_REGISTER_MODULE,
        });

      });
    });
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

  public static forRoot(): ModuleWithProviders {

    // const storeProvider = {
    //   provide: StoreProvider,
    //   useValue: new StoreProvider(config as {} as IStoreConfig<IRootState>),
    //   useFactory: () => {
    //   if (config.store) {
    //     return new config.store(config);
    //   }
    //
    //   return new StoreProvider(config as {} as IStoreConfig<IRootState>);
    // },
    // };

    return {
      ngModule: ReduxModule,
      providers: [
      ],
    };
  }

}
