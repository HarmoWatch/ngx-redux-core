import { ReduxStateInterface } from './interface';

export interface StateConstructor {
  new (...args: any[]): ReduxStateInterface<{}>;
}
