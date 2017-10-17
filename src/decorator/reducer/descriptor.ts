import { ReduxReducerFunction } from './function';

export type ReduxReducerDescriptor<S, P> = TypedPropertyDescriptor<ReduxReducerFunction<S, P>>;
