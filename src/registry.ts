import { Reducer, Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { getActionTypeByFunction } from './decorator/action/action';
import {
  getReduxReducerClassMetadata,
  IReduxReducerClassMetadata,
  ReduxReducerActionType,
  ReduxReducerActionTypeArray,
} from './decorator/reducer/reducer';
import { getReduxStateMetadata, IReduxState } from './decorator/state/state';
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

  public static registerState(state: IReduxState<{}>) {
    ReduxRegistry.getStore().then((store) => {

      const stateConfig = getReduxStateMetadata(state.constructor);

      Promise.resolve(state.getInitialState()).then((initialState) => {

        stateConfig.reducers
          .map((reducer) => getReduxReducerClassMetadata(reducer.constructor))
          .forEach((metadata: IReduxReducerClassMetadata) => {
            metadata.reducers.forEach(reducer => {
              ReduxRegistry.registerReducer(stateConfig.name, reducer.types, reducer.reducer);
            });
          });

        store.dispatch<IReduxAction<IRegisterModulePayload>>({
          payload: {
            initialState,
            stateName: stateConfig.name,
          },
          type: ReduxRegistry.ACTION_REGISTER_MODULE,
        });
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
