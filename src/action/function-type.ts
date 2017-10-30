export type ActionFunctionType<P = {} | void> = (...rest) => Promise<P> | P;
