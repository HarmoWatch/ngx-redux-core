import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { getReduxStateMetadata, IReduxStateType } from '../decorator/state/state';

import { ReduxRegistry } from '../registry';

export function selectByState<S>(state: {}, selector: string, context?: IReduxStateType): S {

  if (!selector.startsWith('/')) {
    if (!context) {
      throw new Error('Relative selectors need to have a state context!');
    }

    selector = `/${getReduxStateMetadata(context).name}/${selector}`;
  }

  const selectorArray: string[] = selector.split('/');

  return selectorArray
    .filter((propertyKey) => propertyKey !== '')
    .reduce((previousValue, propertyKey) => {
      if (!previousValue || !previousValue[ propertyKey ]) {
        return null;
      }

      return previousValue[ propertyKey ];
    }, state);
}

export function select<S>(selector: string, context?: IReduxStateType): Observable<S> {
  const subject = new BehaviorSubject<S>(null);
  ReduxRegistry.getStore().then(store => {
    subject.next(selectByState(store.getState(), selector, context));
    store.subscribe(() => subject.next(selectByState(store.getState(), selector, context)));
  });

  return subject.asObservable();
}
