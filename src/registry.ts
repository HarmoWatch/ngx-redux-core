import { Reducer, Store } from 'redux';
import 'rxjs/add/operator/toPromise';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

import { getActionTypeByFunction } from './action/decorator';
import { ReduxActionFunctionType } from './action/function-type';
import { ReduxActionFunctionTypeArray } from './action/function-type-array';
import { ReduxActionInterface } from './action/interface';
import { MetadataManager } from './metadata/manager';
import { ReduxReducerDecoratorMetadata } from './reducer/decorator/metadata';
import { ReduxStateInterface } from './state/interface';

export class ReduxRegistryReducerItem {
  stateName: string;
  reducer: Reducer<{}>;
  type: ReduxActionFunctionType<{}>;
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

  public static registerReducer(stateName: string, types: ReduxActionFunctionTypeArray<{}>, reducer: Reducer<{}>) {

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
        type: types as ReduxActionFunctionType<{}>,
      });
    }

  }

  public static registerState(state: ReduxStateInterface<{}>) {
    ReduxRegistry.getStore().then((store) => {

      const stateConfig = MetadataManager.getStateMetadata(state.constructor);
      const initState = state.getInitialState();
      let initStateToResolve = initState;

      if (initState instanceof Observable) {
        initStateToResolve = initState.toPromise();
      }

      Promise.resolve(initStateToResolve).then((initialState) => {

        stateConfig.reducers
          .map((reducer) => MetadataManager.getReducerMetadata(reducer.constructor))
          .forEach((metadata: ReduxReducerDecoratorMetadata) => {
            metadata.reducers.forEach(reducer => {
              ReduxRegistry.registerReducer(stateConfig.name, reducer.types, reducer.reducer);
            });
          });

        store.dispatch<ReduxActionInterface<IRegisterModulePayload>>({
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
