import { ReduxReducerFunctionType } from '../function-type';

export type ReduxReducerDecoratorDescriptor<S, P> = TypedPropertyDescriptor<ReduxReducerFunctionType<S, P>>;
