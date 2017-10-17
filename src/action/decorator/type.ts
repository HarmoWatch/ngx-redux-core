import { ReduxActionFunctionType } from '../function-type';

export type ReduxActionDecoratorType = (target: object,
                                        propertyKey: string | symbol,
                                        descriptor: TypedPropertyDescriptor<ReduxActionFunctionType>) => void;
