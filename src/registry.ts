import { Reducer, Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export class ReduxRegistry {

  private static readonly _store = new AsyncSubject<Store<{}>>();
  private static readonly _reducers: { [type: string]: Array<Reducer<{}>> } = {};
  public static readonly modules = new ReplaySubject<any>();

  public static registerStore(store: Store<{}>) {
    ReduxRegistry._store.next(store);
    ReduxRegistry._store.complete();
  }

  public static registerReducer(type: string, reducer: Reducer<{}>) {
    ReduxRegistry._reducers[ type ] = ReduxRegistry._reducers[ type ] || [];
    ReduxRegistry._reducers[ type ].push(reducer);
  }

  public static registerModule(/*config: IReduxModuleConfig,
                               moduleConstructor: IReduxModuleType<{}>,*/
                               module: any) {

    this.modules.next(module);
  }

  public static getReducersByType(type: string): Array<Reducer<{}>> {
    return ReduxRegistry._reducers[ type ] || [];
  }

  public static getStore(): Promise<Store<{}>> {
    return new Promise(ReduxRegistry._store.subscribe.bind(ReduxRegistry._store));
  }

}
