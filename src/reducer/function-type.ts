import { Action } from '../action/interface';

export type ReduxReducerFunctionType<S, P> = (state: S, action?: Action<P>) => S;
