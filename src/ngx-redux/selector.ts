import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { MetadataManager } from './metadata/manager';
import { ReduxRootState } from './module/root/state';
import { Registry } from './registry';
import { ReduxSelectorCacheFactory } from './selector/cache/selector-cache-factory';
import { ReduxStateProviderConstructor } from './state/provider.constructor';

export class ReduxSelector<T> extends Observable<T> {

  private static readonly DELIMITER = '/';

  constructor(selector = '/',
              stateProvider?: ReduxStateProviderConstructor) {

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

  public static create<T>(selector: string, stateProvider?: ReduxStateProviderConstructor): ReduxSelector<T> {
    return new ReduxSelector(selector, stateProvider);
  }

  public static getAbsoluteSelector(selector: string, stateProvider?: ReduxStateProviderConstructor): string {
    if (!selector.startsWith(ReduxSelector.DELIMITER)) {
      if (!stateProvider) {
        throw new Error('You need to provide a state provider, if you use relative selectors');
      }

      return `/${MetadataManager.getStateMetadata(stateProvider).name}/${selector}`;
    }

    return selector;
  }

  public static getValueByState<S>(state: ReduxRootState<S>, selector: string, stateProvider?: ReduxStateProviderConstructor): S {
    return ReduxSelector.getAbsoluteSelector(selector, stateProvider).split(ReduxSelector.DELIMITER)
      .filter(propertyKey => propertyKey !== '')
      .reduce((previousValue, propertyKey) => {
        if (!previousValue || !previousValue.hasOwnProperty(propertyKey)) {
          return null;
        }

        return previousValue[ propertyKey ];
      }, state as {});
  }

}
