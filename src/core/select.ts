import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { ReduxRegistry } from '../registry';

export function selectByState<S>(state: {}, selector: string): S {

  const selectorArray: string[] = selector.split('/');

  if (selectorArray[ 0 ] !== '') {
    throw new Error('Relative selectors are not supported yet!');
  }

  return selectorArray
    .filter((propertyKey) => propertyKey !== '')
    .reduce((previousValue, propertyKey) => {
      if (!previousValue || !previousValue[ propertyKey ]) {
        return null;
      }

      return previousValue[ propertyKey ];
    }, state);
}

export function select<S>(selector: string): Observable<S> {
  const subject = new BehaviorSubject<S>(null);
  ReduxRegistry.getStore().then(store => {
    subject.next(selectByState(store.getState(), selector));
    store.subscribe(() => subject.next(selectByState(store.getState(), selector)));
  });

  return subject.asObservable();
}
