import { ReduxStateInterface } from './interface';

/**
 * @deprecated Use StateProviderType instead
 */
export interface StateConstructor {
  new (...args: any[]): ReduxStateInterface<{}>;
}
