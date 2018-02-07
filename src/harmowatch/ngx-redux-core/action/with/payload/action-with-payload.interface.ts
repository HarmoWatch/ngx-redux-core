import { Action } from 'redux';

export interface ActionWithPayload<P = void> extends Action {
  type: string;
  payload?: P;
}
