import { ReduxStateDecorator, ReduxStateType } from '@harmowatch/redux-decorators';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';
import { ReduxRootState } from '../module/root/state';
import { Registry } from '../registry';

export class ReduxSelector<T> extends Subject<T> {

  private static readonly DELIMITER = '/';

  constructor(selector = '/',
              stateProvider?: ReduxStateType) {

    if (!selector.startsWith(ReduxSelector.DELIMITER) && !stateProvider) {
      throw new Error('You need to provide a state provider, if you use relative selectors');
    }

    super();

    Registry.getStore().then(store => {
      const next = () => this.next(ReduxSelector.getValueByState(store.getState(), selector, stateProvider));
      store.subscribe(() => next());
      next(); // we need to trigger a initial value, otherwise we've to wait until the first state change
    });

  }

  /**
   * @deprecated Will be removed in 0.2.*. Please use the constructor (new ReduxSelector(selector, stateProvider)).
   */
  public static create<T>(selector: string, stateProvider?: ReduxStateType): ReduxSelector<T> {
    return new ReduxSelector(selector, stateProvider);
  }

  public static getAbsoluteSelector(selector: string, stateProvider?: ReduxStateType): string {
    if (!selector.startsWith(ReduxSelector.DELIMITER)) {
      return `/${ReduxStateDecorator.get(stateProvider).name}/${selector}`;
    }

    return selector;
  }

  public static getValueByState<S>(state: ReduxRootState<S>, selector: string, stateProvider?: ReduxStateType): S {
    /* save the return value in a constant to prevent
     * "Metadata collected contains an error that will be reported at runtime: Lambda not supported."
     * error
     */
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
