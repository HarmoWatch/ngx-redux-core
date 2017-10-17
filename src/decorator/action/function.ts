export type ReduxActionFunctionType<P = {} | void> = (...rest) => P;
export type ReduxReducerActionType<P> = ReduxActionFunctionType<Promise<P>> | ReduxActionFunctionType<P>;
export type ReduxReducerActionTypeArray<P> = ReduxReducerActionType<P> | Array<ReduxReducerActionType<P>>;
