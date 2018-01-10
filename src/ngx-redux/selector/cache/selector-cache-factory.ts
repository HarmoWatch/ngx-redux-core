import { ReduxStateType } from '@harmowatch/redux-decorators';
import { ReduxSelector } from '../../selector';

export class ReduxSelectorCacheFactory {

  private static selectors: {
    [key: string]: ReduxSelector<{}>
  } = {};

  public static clear() {
    ReduxSelectorCacheFactory.selectors = {};
  }

  public static getOrCreate<T>(selector: string, stateProvider?: ReduxStateType): ReduxSelector<T> {
    if (ReduxSelectorCacheFactory.has(selector, stateProvider)) {
      return ReduxSelectorCacheFactory.get(selector, stateProvider);
    }

    return new ReduxSelector(selector, stateProvider);
  }

  public static get<T>(selector: string, stateProvider?: ReduxStateType): ReduxSelector<T> {
    const key = ReduxSelectorCacheFactory.getKey(selector, stateProvider);
    return ReduxSelectorCacheFactory.selectors[ key ] as ReduxSelector<T>;
  }

  public static set(reduxSelector: ReduxSelector<{}>, selector: string, stateProvider?: ReduxStateType) {
    const key = ReduxSelectorCacheFactory.getKey(selector, stateProvider);
    ReduxSelectorCacheFactory.selectors[ key ] = reduxSelector;
  }

  public static has(selector: string, stateProvider?: ReduxStateType): boolean {
    const key = ReduxSelectorCacheFactory.getKey(selector, stateProvider);
    return !!ReduxSelectorCacheFactory.selectors[ key ];
  }

  private static getKey(selector: string, stateProvider?: ReduxStateType): string {
    return ReduxSelector.getAbsoluteSelector(selector, stateProvider);
  }

}
