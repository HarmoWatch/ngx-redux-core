import { Reducer, Store } from 'redux';
import 'rxjs/add/operator/toPromise';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

import { getActionTypeByFunction } from './action/decorator';
import { ActionFunctionType } from './action/function-type';
import { ActionFunctionTypeArray } from './action/function-type-array';
import { ActionInterface } from './action/interface';
import { MetadataManager } from './metadata/manager';
import { ReduxStateInterface } from './state/interface';

export class RegistryReducerItem {
  stateName: string;
  reducer: Reducer<{}>;
  type: ActionFunctionType<{}>;
}

export interface IRegisterStatePayload {
  initialValue: {};
  name: string;
}

export class Registry {

  public static readonly ACTION_REGISTER_STATE = `ngx-redux://registerState`;

  private static _store = new AsyncSubject<Store<{}>>();
  private static _reducers: RegistryReducerItem[] = [];

  public static reset() {
    Registry._store = new AsyncSubject<Store<{}>>();
    Registry._reducers = [];
  }

  public static registerStore(store: Store<{}>) {
    Registry._store.next(store);
    Registry._store.complete();
  }

  public static registerReducer(stateName: string, types: ActionFunctionTypeArray<{}>, reducer: Reducer<{}>) {

    if (Array.isArray(types)) {
      types.forEach((type) => {
        Registry._reducers.push({
          reducer,
          stateName,
          type,
        });
      });
    } else {
      Registry._reducers.push({
        reducer,
        stateName,
        type: types as ActionFunctionType<{}>,
      });
    }

  }

  public static registerState(state: ReduxStateInterface<{}>) {
    Registry.getStore().then((store) => {

      const stateConfig = MetadataManager.getStateMetadata(state.constructor);
      const initState = state.getInitialState();
      let initStateToResolve = initState;

      if (initState instanceof Observable) {
        initStateToResolve = initState.toPromise();
      }

      Promise.resolve(initStateToResolve).then((initialState) => {
        store.dispatch<ActionInterface<IRegisterStatePayload>>({
          payload: {
            initialValue: initialState,
            name: stateConfig.name,
          },
          type: Registry.ACTION_REGISTER_STATE,
        });
      });

    });
  }

  public static getReducerItemsByType(type: string): RegistryReducerItem[] {
    return Registry._reducers
      .filter(reducerItem => getActionTypeByFunction(reducerItem.type) === type);
  }

  public static getStore(): Promise<Store<{}>> {
    return new Promise(Registry._store.subscribe.bind(Registry._store));
  }

}
