import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReduxRegistry } from '../../registry';

export function ReduxSelect(selector: string[]): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    const subject = new BehaviorSubject(null);

    ReduxRegistry.store.then(store => {
      subject.next(select(store.getState(), selector));
      const unsubscribe = store.subscribe(() => {
        subject.next(select(store.getState(), selector));
      });
    });

    // subject.asObservable();

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: subject.asObservable(),
    });

  };
}

function select(state: {}, selector: string[]): {} {
  return selector.reduce((previousValue, propertyKey) => {
    if (typeof previousValue === 'object') {
      return previousValue[ propertyKey ];
    }
  }, state);
}
