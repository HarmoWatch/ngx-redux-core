import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReduxRegistry } from '../../registry';

export function ReduxSelect(selector: string | string[]): PropertyDecorator {
  const selectorArray: string[] = Array.isArray(selector) ? selector : [ selector ];

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
  return selector.reduce((previousValue, propertyKey) => {
    if (!previousValue || !previousValue[ propertyKey ]) {
      return null;
    }

    return previousValue[ propertyKey ];
  }, state);
}
