import { ReduxStateInterface } from './interface';

export interface ReduxStateConstructor {
  new (...args: any[]): ReduxStateInterface<{}>;
}
