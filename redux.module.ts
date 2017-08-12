import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { applyMiddleware, createStore, Reducer, Store } from 'redux';
import { logger } from 'redux-logger';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { IAction, IRootState } from './interfaces';

interface IPayloadRegisterModule {
  initialState: {};
  stateName: string;
}

interface IReduxModuleItem<T = {}> {
  initialState: T;
  stateName: string;
  reducer: Reducer<T>;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class ReduxModule {

  public static readonly registerModule$ = new ReplaySubject<IReduxModuleItem>();
  public static readonly ACTION_REGISTER_MODULE = `${ReduxModule.name}://registerModule`;

  private store: Store<{}>;
  private modules: IReduxModuleItem[] = [];

  constructor() {

    this.store = createStore(
      this.reduce.bind(this),
      {module: {}},
      applyMiddleware(logger),
    );

    // window.setInterval(() => {
    //
    // }, 1000);

    ReduxModule.registerModule$.subscribe(module => {
      this.store.dispatch<IAction<IPayloadRegisterModule>>({
        payload: {
          initialState: module.initialState,
          stateName: module.stateName,
        },
        type: ReduxModule.ACTION_REGISTER_MODULE,
      });

      this.modules.push(module);
    });
  }

  private reduce(state: IRootState, action: IAction<IPayloadRegisterModule>) {

    if (action.type === ReduxModule.ACTION_REGISTER_MODULE) {
      const {stateName, initialState} = action.payload;

      return Object.assign({}, state, {
        module: Object.assign({}, state.module, {
          [stateName]: initialState,
        }),
      });
    }

    return this.modules.reduce((reducedState, module) => module.reducer(reducedState, action), state);
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReduxModule,
      providers: [],
    };
  }
}
