import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReduxRegistry } from '../../registry';

export function ReduxSelect(selector: string[]): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    const subject = new BehaviorSubject(null);
    ReduxRegistry.getStore().then(store => {
      subject.next(select(store.getState(), selector));
      store.subscribe(() => {
        subject.next(select(store.getState(), selector));
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
