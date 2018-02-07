import 'rxjs/add/operator/toPromise';

import {
  ReduxActionDispatcher,
  ReduxActionFunction,
  ReduxStateDecorator,
  ReduxStateInterface
} from '@harmowatch/redux-decorators';

import { Action, Reducer, Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

import { Inject, Injectable } from '@angular/core';
import { ReduxStore } from '@harmowatch/ngx-redux-core/store/token';
import { ReduxActionWithPayload } from '@harmowatch/ngx-redux-core/interfaces/redux-action.interface';

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
export class Registry {

  public static readonly ACTION_REGISTER_STATE = `@harmowatch/ngx-redux-core/registerState`;

  private static _store = new AsyncSubject<Store<{}>>();
  private static _reducers: RegistryReducerItem[] = [];

  constructor(@Inject(ReduxStore) store: Store<{}> = null) {
    Registry.reset();
    Registry.registerStore(store);
  }

  public static reset() {
    Registry._store = new AsyncSubject<Store<{}>>();
    Registry._reducers = [];
  }

  public static registerStore(store: Store<{}>) {
    Registry.reset();
    Registry._store.next(store);
    Registry._store.complete();

    ReduxActionDispatcher.dispatchedActions.subscribe(action => {
      store.dispatch(action as Action);
    });
  }

  public static registerState(state: ReduxStateInterface<{}>) {
    Registry.getStore().then((store) => {

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
          type: Registry.ACTION_REGISTER_STATE,
        });
      });

    });
  }

  public static getStore(): Promise<Store<{}>> {
    return new Promise(Registry._store.subscribe.bind(Registry._store));
  }

}
