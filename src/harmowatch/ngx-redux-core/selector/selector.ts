import 'rxjs/add/operator/map';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ReduxStateDecorator } from '@harmowatch/redux-decorators';
import { ReduxStateProviderType } from '@harmowatch/ngx-redux-core/state/state.provider.type';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';
import { Registry } from '@harmowatch/ngx-redux-core/registry';
import { ReduxRootState } from '@harmowatch/ngx-redux-core/interfaces/redux-root-state.interface';

export class ReduxSelector<T> extends ReplaySubject<T> {

  private static readonly DELIMITER = '/';

  constructor(selector = '/',
              stateProvider?: ReduxStateProviderType<ReduxStateProvider<{}>>) {

    if (!selector.startsWith(ReduxSelector.DELIMITER) && !stateProvider) {
      throw new Error('You need to provide a state provider, if you use relative selectors');
    }

    super(1);

    Registry.getStore().then(store => {
      const next = () => {
        this.next(ReduxSelector.getValueByState(store.getState(), selector, stateProvider));
      };

      store.subscribe(() => next());
      next(); // we need to trigger a initial value, otherwise we've to wait until the first state change
    });

  }

  public static normalize(selector: string, stateProvider?: ReduxStateProviderType): string {
    if (!selector.startsWith(ReduxSelector.DELIMITER)) {
      return `/${ReduxStateDecorator.get(stateProvider).name}/${selector}`;
    }

    return selector;
  }

  public static getValueByState<S>(state: ReduxRootState<S>, selector: string, stateProvider?: ReduxStateProviderType): S {
    /* save the return value in a constant to prevent
     * "Metadata collected contains an error that will be reported at runtime: Lambda not supported."
     * error
     */
    const value: S = ReduxSelector.normalize(selector, stateProvider).split(ReduxSelector.DELIMITER)
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
