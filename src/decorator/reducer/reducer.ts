import { IReduxAction } from '../../interfaces';
import { MetaDataManager } from '../../meta-data/manager';
import { ReduxActionFunc } from '../action/action';

export type ReduxReducerFunc<S, P> = (state: S, action?: IReduxAction<P>) => S;
export type ReduxReducerDecorator<S, P>
  = (target: object,
     propertyKey: string | symbol,
     descriptor: TypedPropertyDescriptor<ReduxReducerFunc<S, P>>) => TypedPropertyDescriptor<ReduxReducerFunc<S, P>>;

export type ReduxReducerActionType<P> = ReduxActionFunc<Promise<P>> | ReduxActionFunc<P> | string;
export type ReduxReducerActionTypeArray<P> = ReduxReducerActionType<P> | Array<ReduxReducerActionType<P>>;

export interface IReduxReducerClassMetadata {
  reducers: Array<{
    types: ReduxReducerActionTypeArray<{}>,
    reducer: ReduxReducerFunc<{}, {}>,
  }>;
}

export function ReduxReducer<S = any, P = any>(types: ReduxReducerActionTypeArray<P>): ReduxReducerDecorator<S, P> {

  return (target: object, propertyKey: string) => {
    const data = MetaDataManager.getReducerMetaData(target.constructor);
    data.reducers.push({types, reducer: target[ propertyKey ].bind(target)});
    MetaDataManager.setReducerMetaData(target.constructor, data);

    return target[ propertyKey ];
  };

}
