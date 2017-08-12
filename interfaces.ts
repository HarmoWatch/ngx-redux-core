import { Action } from 'redux';

export interface IAction<P = null> extends Action {
  payload?: P;
}

export interface IRootState<T = {}> {
  module: {
    [key: string]: T;
  };
}

export interface IReduxModule<ModuleState> {
  initialState: ModuleState;
}

export interface IGenericType<T = {}> {
  new (...args: any[]): T;
}

// export interface IReducer<S> {
//   reduce?: Reducer<S>;
// }
