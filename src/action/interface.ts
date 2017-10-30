import { Action as ReduxAction } from 'redux';

export interface Action<P = void> extends ReduxAction {
  payload?: P;
}
