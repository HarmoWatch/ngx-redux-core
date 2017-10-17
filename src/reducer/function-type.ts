import { ReduxActionInterface } from '../action/interface';

export type ReduxReducerFunctionType<S, P> = (state: S, action?: ReduxActionInterface<P>) => S;
