export type ReduxActionFunctionType<P = {} | void> = (...rest) => Promise<P> | P;
