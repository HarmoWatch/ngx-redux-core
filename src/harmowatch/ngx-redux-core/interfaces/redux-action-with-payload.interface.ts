import { Action } from 'redux';

export interface ReduxActionWithPayload<P = void> extends Action {
  type: string;
  payload?: P;
}
