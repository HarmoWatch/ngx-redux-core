import 'rxjs/add/operator/toPromise';

import {
  ReduxActionDispatcher,
  ReduxActionFunction,
  ReduxStateDecorator,
  ReduxStateInterface
} from '@harmowatch/redux-decorators';

import { Reducer, Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

import { Inject, Injectable } from '@angular/core';
import { ReduxStore } from '../tokens/redux-store.token';
import { ReduxActionWithPayload } from '../interfaces/redux-action.interface';

export class RegistryReducerItem {
  stateName: string;
  reducer: Reducer<{}>;
  type: ReduxActionFunction<{}>;
}

export interface IRegisterStatePayload {
  initialValue: {};
  name: string;
}

@Injectable()
export class ReduxRegistry {

  public static readonly ACTION_REGISTER_STATE = `@harmowatch/ngx-redux-core/registerState`;

  private static _store = new AsyncSubject<Store<{}>>();
  private static _reducers: RegistryReducerItem[] = [];

  constructor(@Inject(ReduxStore) store: Store<{}> = null) {
    ReduxRegistry.reset();
    ReduxRegistry.registerStore(store);
  }

  public static reset() {
    ReduxRegistry._store = new AsyncSubject<Store<{}>>();
    ReduxRegistry._reducers = [];
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

  public static registerState(state: ReduxStateInterface<{}>) {
    ReduxRegistry.getStore().then((store) => {

      const stateConfig = ReduxStateDecorator.get(state.constructor);
      const initState = state.getInitialState();
      let initStateToResolve = initState;

      if (initState instanceof Observable) {
        initStateToResolve = initState.toPromise();
      }

      Promise.resolve(initStateToResolve).then(initialState => {
        store.dispatch<ReduxActionWithPayload<IRegisterStatePayload>>({
          payload: {
            initialValue: initialState,
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
