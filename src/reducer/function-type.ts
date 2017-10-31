import { ActionInterface } from '../action/interface';

export type ReduxReducerFunctionType<S, P> = (state: S, action?: ActionInterface<P>) => S;
