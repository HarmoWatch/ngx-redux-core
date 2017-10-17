import { IReduxAction } from '../../interfaces';

export type ReduxReducerFunctionType<S, P> = (state: S, action?: IReduxAction<P>) => S;
