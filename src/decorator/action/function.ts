export type ReduxActionFunc<P = {} | void> = (...rest) => P;
export type ReduxReducerActionType<P> = ReduxActionFunc<Promise<P>> | ReduxActionFunc<P>;
export type ReduxReducerActionTypeArray<P> = ReduxReducerActionType<P> | Array<ReduxReducerActionType<P>>;
