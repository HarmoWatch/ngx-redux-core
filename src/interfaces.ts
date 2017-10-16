import { Action, Store } from 'redux';
import { IReduxStateType } from './decorator/state/state';

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
  state: IReduxStateType;
}
