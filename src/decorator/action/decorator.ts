import { ReduxActionFunctionType } from './function-type';

export type ReduxActionDecorator = (target: object,
                                    propertyKey: string | symbol,
                                    descriptor: TypedPropertyDescriptor<ReduxActionFunctionType>) => void;
