import { Action } from 'redux';

export interface IReduxAction<P = void> extends Action {
  payload?: P;
}

