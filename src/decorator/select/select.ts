import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReduxRegistry } from '../../registry';

export function ReduxSelect(selector: string): PropertyDecorator {
  const selectorArray: string[] = selector.split('/');

  if (selectorArray[ 0 ] !== '') {
    throw new Error('Relative selectors are not supported yet!');
  }

  return (target: {}, propertyKey: string) => {

    const subject = new BehaviorSubject(null);
    ReduxRegistry.getStore().then(store => {
      subject.next(select(store.getState(), selectorArray));
      store.subscribe(() => {
        subject.next(select(store.getState(), selectorArray));
      });
    });

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: subject.asObservable(),
    });

  };
}

function select(state: {}, selector: string[]): {} {
  return selector
    .filter((propertyKey) => propertyKey !== '')
    .reduce((previousValue, propertyKey) => {
      if (!previousValue || !previousValue[ propertyKey ]) {
        return null;
      }

      return previousValue[ propertyKey ];
    }, state);
}
