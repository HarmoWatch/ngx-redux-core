import { Injectable } from '@angular/core';
import { createStore, Dispatch, Store } from 'redux';
import { IAction, IRootState, IStoreProvider } from '../interfaces';
import { ReduxModuleItem } from '../redux-module-item';
import { IPayloadRegisterModule, IStoreConfig, ReduxModule } from '../redux.module';

@Injectable()
export class StoreProvider implements IStoreProvider<IRootState> {

  public dispatch: Dispatch<IRootState>;

  protected store: Store<{ module: {}; }>;
  protected modules: ReduxModuleItem[] = [];

  constructor(public config: IStoreConfig<IRootState>) {
    this.store = createStore(
      this.reduce.bind(this),
      { module: {} },
      config.enhancer || null,
    );

    this.dispatch = this.store.dispatch.bind(this.store);

    ReduxModuleItem.onRegister$.subscribe(moduleItem => {
      this.modules.push(moduleItem);
    });
  }

  // @todo
  protected reduce(state: IRootState, action: IAction<IPayloadRegisterModule>) {

    if (action.type === ReduxModule.ACTION_REGISTER_MODULE) {
      const { stateName, initialState } = action.payload;

      return Object.assign({}, state, {
        module: Object.assign({}, state.module, {
          [stateName]: initialState,
        }),
      });
    }

    return this.modules.reduce((reducedState, module) => module.reduce(reducedState, action), state);
  }
}

// @Injectable()
// export class ReduxRootStoreProvider implements IStoreProvider {
//
//   public dispatch: Dispatch<IRootState>;
//
//   // private store: Store<IRootState>;
//   private modules: IReduxModuleItem[] = [];
//
//   constructor(config: IStoreConfig) {
//     console.log('A');
//   }
//
// // constructor(config: IStoreConfig<IRootState>) {
//   //   this.store = createStore(
//   //     this.reduce.bind(this),
//   //     { module: {} },
//   //     config.enhancer || null,
//   //   );
//   //
//   //   this.dispatch = this.store.dispatch.bind(this.store);
//   // }
//   //
//   // public onReduxInit(config: IStoreConfig<IRootState>) {
//   //   this.store = createStore(
//   //     this.reduce.bind(this),
//   //     { module: {} },
//   //     config.enhancer || null,
//   //   );
//   //
//   //   this.dispatch = this.store.dispatch.bind(this.store);
//   // }
//
//   public onModuleStateRegister(stateName: string, initialState: {}) {
//     this.dispatch({
//       payload: { stateName, initialState },
//       type: ReduxModule.ACTION_REGISTER_MODULE,
//     });
//   }
//
//   private reduce(state: IRootState, action: IAction<IPayloadRegisterModule>) {
//
//     if (action.type === ReduxModule.ACTION_REGISTER_MODULE) {
//       const { stateName, initialState } = action.payload;
//
//       return Object.assign({}, state, {
//         module: Object.assign({}, state.module, {
//           [stateName]: initialState,
//         }),
//       });
//     }
//
//     return this.modules.reduce((reducedState, module) => module.reducer(reducedState, action), state);
//   }
//
// }
