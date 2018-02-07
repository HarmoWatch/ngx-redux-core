import { Injectable } from '@angular/core';

import { ReduxRootState } from '@harmowatch/ngx-redux-core/interfaces/redux-root-state.interface';
import { IRegisterStatePayload, ReduxRegistry } from '@harmowatch/ngx-redux-core/providers/redux-registry';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/providers/redux-state.provider';
import { ReduxActionWithPayload } from '@harmowatch/ngx-redux-core/interfaces/redux-action.interface';

@Injectable()
export class ReduxReducerProvider {

  private stateProviders: {
    [name: string]: ReduxStateProvider<{}>,
  } = {};

  public addStateProvider(provider: ReduxStateProvider<{}>) {
    if (!this.stateProviders[ provider.name ]) {
      ReduxRegistry.registerState(provider);
      this.stateProviders[ provider.name ] = provider;
    }
  }

  public reduce(rootState: ReduxRootState, action: ReduxActionWithPayload<any>): ReduxRootState {

    if (action.type === ReduxRegistry.ACTION_REGISTER_STATE) {
      const regAction = (action as {} as ReduxActionWithPayload<IRegisterStatePayload>);

      return {
        ...rootState,
        [ regAction.payload.name ]: regAction.payload.initialValue,
      };
    }

    return Object.values(this.stateProviders).reduce((stateToReduce, provider) => {
      return Object.assign({}, stateToReduce, {
        [ provider.name ]: provider.reduce(stateToReduce[ provider.name ], action),
      });
    }, rootState);
  }

}
