import { ReduxActionFunctionTypeArray } from '../action/function-type-array';
import { MetadataManager } from '../metadata/manager';
import { ReduxReducerDecoratorType as DecoratorType } from './decorator/type';

export function ReduxReducerDecorator<S = any, P = any>(types: ReduxActionFunctionTypeArray<P>): DecoratorType<S, P> {

  return (target: object, propertyKey: string) => {
    const data = MetadataManager.getReducerMetadata(target.constructor);
    data.reducers.push({types, reducer: target[ propertyKey ].bind(target)});
    MetadataManager.setReducerMetadata(target.constructor, data);

    return target[ propertyKey ];
  };

}
