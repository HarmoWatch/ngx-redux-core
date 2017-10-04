import { Reducer, Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { IReduxAction } from './interfaces';

export class ReduxRegistryReducerItem {
  stateName: string;
  reducer: Reducer<{}>;
}

export interface IRegisterModulePayload {
  initialState: {};
  stateName: string;
}

export class ReduxRegistry {

  public static readonly ACTION_REGISTER_MODULE = `${ReduxRegistry.name}://registerModule`;

  private static readonly _store = new AsyncSubject<Store<{}>>();
  private static readonly _reducers: { [type: string]: ReduxRegistryReducerItem[] } = {};

  public static registerStore(store: Store<{}>) {
    ReduxRegistry._store.next(store);
    ReduxRegistry._store.complete();
  }

  public static registerReducer(stateName: string, type: string, reducer: Reducer<{}>) {
    ReduxRegistry._reducers[ type ] = ReduxRegistry._reducers[ type ] || [];
    ReduxRegistry._reducers[ type ].push({stateName, reducer});
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
    return ReduxRegistry._reducers[ type ] || [];
  }

  public static getStore(): Promise<Store<{}>> {
    return new Promise(ReduxRegistry._store.subscribe.bind(ReduxRegistry._store));
  }

}
