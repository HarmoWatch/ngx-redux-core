import { Action, Store } from 'redux';
import { ReduxStateConstructor } from './decorator/state/constructor';

export interface IReduxAction<P = void> extends Action {
  payload?: P;
}

export interface IRootState<T = {}> {
  module: {
    [key: string]: T;
  };
}

export interface IReduxModuleRootConfig {
  store?: Store<{}>;
}

export interface IReduxModuleChildConfig {
  state: ReduxStateConstructor;
}
