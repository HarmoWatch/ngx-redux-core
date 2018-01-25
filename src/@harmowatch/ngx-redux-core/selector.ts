import { ReduxStateDecorator, ReduxStateType } from '@harmowatch/redux-decorators';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { ReduxRootState } from './module/root/state';
import { Registry } from './registry';
import { ReduxSelectorCacheFactory } from './selector/cache/selector-cache-factory';

export class ReduxSelector<T> extends Observable<T> {

  private static readonly DELIMITER = '/';

  constructor(selector = '/',
              stateProvider?: ReduxStateType) {

    super(observer => {
      Registry.getStore().then(store => {
        const next = () => observer.next(ReduxSelector.getValueByState(store.getState(), selector, stateProvider));
        store.subscribe(() => next());
        next(); // we need to trigger a initial value, otherwise we've to wait until the first state change
      });
    });

    if (!ReduxSelectorCacheFactory.has(selector, stateProvider)) {
      ReduxSelectorCacheFactory.set(this, selector, stateProvider);
    }
  }

  public static create<T>(selector: string, stateProvider?: ReduxStateType): ReduxSelector<T> {
    return new ReduxSelector(selector, stateProvider);
  }

  public static getAbsoluteSelector(selector: string, stateProvider?: ReduxStateType): string {
    if (!selector.startsWith(ReduxSelector.DELIMITER)) {
      if (!stateProvider) {
        throw new Error('You need to provide a state provider, if you use relative selectors');
      }

      return `/${ReduxStateDecorator.get(stateProvider).name}/${selector}`;
    }

    return selector;
  }

  public static getValueByState<S>(state: ReduxRootState<S>, selector: string, stateProvider?: ReduxStateType): S {
    const value: S = ReduxSelector.getAbsoluteSelector(selector, stateProvider).split(ReduxSelector.DELIMITER)
      .filter(propertyKey => propertyKey !== '')
      .reduce((previousValue, propertyKey) => {
        if (!previousValue || !previousValue.hasOwnProperty(propertyKey)) {
          return null;
        }

        return previousValue[ propertyKey ];
      }, state as {});

    return value;
  }

}
