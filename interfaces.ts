import { Action, Dispatch } from 'redux';
import { IStoreConfig } from './redux.module';

export interface IAction<P = null> extends Action {
  payload?: P;
}

export interface IRootState<T = {}> {
  module: {
    [key: string]: T;
  };
}

export interface OnReduxInit {
  onReduxInit(): void;
}

export interface IReduxModule<ModuleState> {
  initialState: ModuleState;
  onReduxInit?(): void;
}

export interface IReduxState {
  initialState: {};
}

export interface IGenericType<T = {}> {
  // tslint:disable-next-line no-any
  new (...args: any[]): T;
}

export interface IStoreProvider<S> {
  dispatch: Dispatch<{}>;
}

export interface IConstructableStoreProvider<S> {
  new(config: IStoreConfig<S>): IStoreProvider<S>;
}
