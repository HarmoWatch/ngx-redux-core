import { MetadataManager } from '../metadata/manager';
import { ReduxReducerActionTypeArray } from './action/function';
import { ReduxReducerDecorator } from './reducer/decorator';

export function ReduxReducer<S = any, P = any>(types: ReduxReducerActionTypeArray<P>): ReduxReducerDecorator<S, P> {

  return (target: object, propertyKey: string) => {
    const data = MetadataManager.getReducerMetadata(target.constructor);
    data.reducers.push({types, reducer: target[ propertyKey ].bind(target)});
    MetadataManager.setReducerMetadata(target.constructor, data);

    return target[ propertyKey ];
  };

}