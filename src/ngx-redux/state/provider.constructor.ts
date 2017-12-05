import { ReduxStateProvider } from './provider';

export interface ReduxStateProviderConstructor {
  new (...args: any[]): ReduxStateProvider<{}>;
}
