import 'rxjs/add/operator/toPromise';

import { ReduxActionDispatcher, ReduxStateDecorator } from '@harmowatch/redux-decorators';

import { Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

import { Inject, Injectable } from '@angular/core';
import { ReduxStore } from '../tokens/redux-store.token';
import { ReduxActionWithPayload } from '../interfaces/redux-action-with-payload.interface';
import { ReduxStateProvider } from './redux-state.provider';

export interface IRegisterStatePayload {
  initialValue: {};
  name: string;
}

@Injectable()
export class ReduxRegistry {

  public static readonly ACTION_REGISTER_STATE = `@harmowatch/ngx-redux-core/registerState`;

  private static _store = new AsyncSubject<Store<{}>>();

  constructor(@Inject(ReduxStore) store: Store<{}> = null) {
    ReduxRegistry.reset();
    ReduxRegistry.registerStore(store);
  }

  public static reset() {
    ReduxRegistry._store = new AsyncSubject<Store<{}>>();
  }

  public static registerStore(store: Store<{}>) {
    ReduxRegistry.reset();
    ReduxRegistry._store.next(store);
    ReduxRegistry._store.complete();

    ReduxActionDispatcher.dispatchedActions.subscribe(action => {

      const reduxAction: ReduxActionWithPayload = {
        type: action.type,
        payload: action.payload,
      };

      store.dispatch(reduxAction);

      if (action.onDispatchSuccess) {
        action.onDispatchSuccess();
      }

    });
  }

  public static registerState(state: ReduxStateProvider) {
    ReduxRegistry.getStore().then((store) => {

      const stateConfig = ReduxStateDecorator.get(state.constructor);
      const initialState = state.getInitialState();

      Promise
        .resolve(initialState instanceof Observable ? initialState.toPromise() : initialState)
        .then(initialValue => {
          store.dispatch<ReduxActionWithPayload<IRegisterStatePayload>>({
            payload: {
              initialValue,
              name: stateConfig.name,
            },
            type: ReduxRegistry.ACTION_REGISTER_STATE,
          });
        });

    });
  }

  public static getStore(): Promise<Store<{}>> {
    return new Promise(ReduxRegistry._store.subscribe.bind(ReduxRegistry._store));
  }

}
