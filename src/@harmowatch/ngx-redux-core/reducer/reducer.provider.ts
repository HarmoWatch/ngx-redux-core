import { Injectable } from '@angular/core';
import { ActionWithPayload, ReduxRootState } from '@harmowatch/ngx-redux-core';
import { IRegisterStatePayload, Registry } from '@harmowatch/ngx-redux-core/registry';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';

@Injectable()
export class ReducerProvider {

  private stateProviders: ReduxStateProvider<{}>[] = [];

  constructor() {
  }

  public addStateProvider(provider: ReduxStateProvider<{}>) {
    Registry.registerState(provider);
    this.stateProviders.push(provider);
  }

  public reduce(rootState: ReduxRootState, action: ActionWithPayload<any>): ReduxRootState {

    if (action.type === Registry.ACTION_REGISTER_STATE) {
      const regAction = (action as {} as ActionWithPayload<IRegisterStatePayload>);

      return {
        ...rootState,
        [ regAction.payload.name ]: regAction.payload.initialValue,
      };
    }

    return this.stateProviders.reduce((stateToReduce, provider) => {
      return Object.assign({}, stateToReduce, {
        [ provider.name ]: provider.reduce(stateToReduce[ provider.name ], action),
      });
    }, rootState);
  }

}
