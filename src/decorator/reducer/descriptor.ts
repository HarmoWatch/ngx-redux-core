import { ReduxReducerFunctionType } from './function-type';

export type ReduxReducerDescriptor<S, P> = TypedPropertyDescriptor<ReduxReducerFunctionType<S, P>>;
