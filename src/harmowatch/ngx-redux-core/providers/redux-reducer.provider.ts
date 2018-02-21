import { Injectable } from '@angular/core';

import { Reducer } from 'redux';
import { ReduxStateProvider } from './redux-state.provider';
import { IRegisterStatePayload, ReduxRegistry } from './redux-registry';
import { ReduxRootState } from '../interfaces/redux-root-state.interface';
import { ReduxActionWithPayload } from '../interfaces/redux-action-with-payload.interface';

@Injectable()
export class ReduxReducerProvider {

  private stateProviders: {
    [name: string]: ReduxStateProvider,
  } = {};

  public get rootReducer(): Reducer<ReduxRootState> {
    return this.reduce.bind(this);
  }

  public addStateProvider(provider: ReduxStateProvider) {
    if (!this.stateProviders[ provider.name ]) {
      ReduxRegistry.registerState(provider);
      this.stateProviders[ provider.name ] = provider;
    } else {
      throw new Error(`State "${provider.name}" is registered twice! Make sure your state name is unique!`);
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
