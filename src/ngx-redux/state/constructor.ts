import { ReduxStateInterface } from '@harmowatch/redux-decorators';

/**
 * @deprecated Use StateProviderType instead
 */
export interface StateConstructor {
  new (...args: any[]): ReduxStateInterface<{}>;
}
