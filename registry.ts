import { Store } from 'redux';
import { AsyncSubject } from 'rxjs/AsyncSubject';

export class ReduxRegistry {

  private static readonly _store = new AsyncSubject<Store<{}>>();

  public static registerStore(store: Store<{}>) {
    ReduxRegistry._store.next(store);
    ReduxRegistry._store.complete();
  }

  public static get store(): Promise<Store<{}>> {
    return new Promise(resolve => ReduxRegistry._store.subscribe(resolve));
  }
}
