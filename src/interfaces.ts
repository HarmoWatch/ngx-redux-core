import { Action } from 'redux';

export interface IReduxAction<P = void> extends Action {
  payload?: P;
}

export interface IRootState<T = {}> {
  module: {
    [key: string]: T;
  };
}

export interface OnReduxInit<S = void> {
  onReduxInit?(): S;
}
