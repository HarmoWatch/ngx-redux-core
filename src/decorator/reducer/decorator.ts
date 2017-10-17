import { ReduxReducerDescriptor } from './descriptor';

export type ReduxReducerDecorator<S, P> = (target: object,
                                           propertyKey: string | symbol,
                                           descriptor: ReduxReducerDescriptor<S, P>) => ReduxReducerDescriptor<S, P>;
