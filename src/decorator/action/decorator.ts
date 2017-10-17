import { ReduxActionFunctionType } from './function';

export type ReduxActionDecorator = (target: object,
                                    propertyKey: string | symbol,
                                    descriptor: TypedPropertyDescriptor<ReduxActionFunctionType>) => void;
