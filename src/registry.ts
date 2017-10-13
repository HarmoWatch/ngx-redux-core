import { Reducer, Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { getActionTypeByFunction } from './decorator/action/action';
import { ReduxReducerActionType, ReduxReducerActionTypeArray } from './decorator/reducer/reducer';
import { IReduxAction } from './interfaces';

export class ReduxRegistryReducerItem {
  stateName: string;
  reducer: Reducer<{}>;
  type: ReduxReducerActionType<{}>;
}

export interface IRegisterModulePayload {
  initialState: {};
  stateName: string;
}

export class ReduxRegistry {

  public static readonly ACTION_REGISTER_MODULE = `${ReduxRegistry.name}://registerModule`;

  private static readonly _store = new AsyncSubject<Store<{}>>();
  private static readonly _reducers: ReduxRegistryReducerItem[] = [];

  public static registerStore(store: Store<{}>) {
    ReduxRegistry._store.next(store);
    ReduxRegistry._store.complete();
  }

  public static registerReducer(stateName: string, types: ReduxReducerActionTypeArray<{}>, reducer: Reducer<{}>) {

    if (Array.isArray(types)) {
      types.forEach((type) => {
        ReduxRegistry._reducers.push({
          reducer,
          stateName,
          type,
        });
      });
    } else {
      ReduxRegistry._reducers.push({
        reducer,
        stateName,
        type: types as ReduxReducerActionType<{}>,
      });
    }

  }

  public static registerModule(stateName, module: any) {
    ReduxRegistry.getStore().then((store) => {

      let initialState = {};
      if (module.onReduxInit) {
        initialState = module.onReduxInit() || {};
      }

      store.dispatch<IReduxAction<IRegisterModulePayload>>({
        payload: {
          initialState,
          stateName,
        },
        type: ReduxRegistry.ACTION_REGISTER_MODULE,
      });

    });
  }

  public static getReducerItemsByType(type: string): ReduxRegistryReducerItem[] {
    return ReduxRegistry._reducers
      .filter(reducerItem => getActionTypeByFunction(reducerItem.type) === type);
  }

  public static getStore(): Promise<Store<{}>> {
    return new Promise(ReduxRegistry._store.subscribe.bind(ReduxRegistry._store));
  }

}
