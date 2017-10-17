import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReduxStateConstructor } from '../decorator/state/constructor';
import { MetadataManager } from '../metadata/manager';

import { ReduxRegistry } from '../registry';

export function selectByState<S>(state: {}, selector: string, context?: ReduxStateConstructor): S {

  if (!selector.startsWith('/')) {
    if (!context) {
      throw new Error('Relative selectors need to have a state context!');
    }

    selector = `/${MetadataManager.getStateMetadata(context).name}/${selector}`;
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

export function select<S>(selector: string, context?: ReduxStateConstructor): Observable<S> {
  const subject = new BehaviorSubject<S>(null);
  ReduxRegistry.getStore().then(store => {
    subject.next(selectByState(store.getState(), selector, context));
    store.subscribe(() => subject.next(selectByState(store.getState(), selector, context)));
  });

  return subject.asObservable();
}
