// import { Injectable } from '@angular/core';
// import { createStore, Dispatch, Store } from 'redux';
// import { IReduxAction, IRootState } from '../interfaces';
// import { ReduxModuleItem } from '../redux-module-item';
// import { IPayloadRegisterModule, ReduxModule } from '../redux.module';
// import { ReduxRegistry } from '../registry';
//
// @Injectable()
// export class StoreProvider implements IStoreProvider<IRootState> {
//
//   public dispatch: Dispatch<IRootState>;
//
//   protected store: Store<{ module: {}; }>;
//   protected modules: ReduxModuleItem[] = [];
//
//   constructor(/*public config: IStoreConfig<IRootState>*/) {
//
//     console.log('createStore');
//
//     this.store = createStore(
//       this.reduce.bind(this),
//       { module: {} },
//       // config.enhancer || null,
//     );
//
//     this.dispatch = this.store.dispatch.bind(this.store);
//
//     ReduxModuleItem.onRegister$.subscribe(moduleItem => {
//       this.modules.push(moduleItem);
//     });
//
//     ReduxRegistry.registerStore(this.store);
//   }
//
//   protected reduce(state: IRootState, action: IReduxAction<IPayloadRegisterModule>) {
//
//     console.log('REDUCE');
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
//     return this.modules.reduce((reducedState, module) => module.reduce(reducedState, action), state);
//   }
// }
