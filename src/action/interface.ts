import { Action as ReduxAction } from 'redux';

export interface ReduxActionInterface<P = void> extends ReduxAction {
  payload?: P;
}
