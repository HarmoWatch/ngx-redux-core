import { Injectable } from '@angular/core';

import { ActionWithPayload, ReduxRootState } from '../index';
import { IRegisterStatePayload, Registry } from '../registry';
import { ReduxStateProvider } from '../state/state.provider';

@Injectable()
export class ReducerProvider {

  private stateProviders: {
    [name: string]: ReduxStateProvider<{}>,
  } = {};

  public addStateProvider(provider: ReduxStateProvider<{}>) {
    if (!this.stateProviders[ provider.name ]) {
      Registry.registerState(provider);
      this.stateProviders[ provider.name ] = provider;
    }
  }

  public reduce(rootState: ReduxRootState, action: ActionWithPayload<any>): ReduxRootState {

    if (action.type === Registry.ACTION_REGISTER_STATE) {
      const regAction = (action as {} as ActionWithPayload<IRegisterStatePayload>);

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
