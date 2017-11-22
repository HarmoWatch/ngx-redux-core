import { ReduxReducerDecoratorDescriptor as Descriptor } from './descriptor';

export type ReduxReducerDecoratorType<S, P> = (target: object,
                                               propertyKey: string | symbol,
                                               descriptor: Descriptor<S, P>) => Descriptor<S, P>;
