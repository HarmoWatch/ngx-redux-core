import { IReduxAction } from '../../interfaces';

export type ReduxReducerFunction<S, P> = (state: S, action?: IReduxAction<P>) => S;
