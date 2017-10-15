import { IReduxAction } from '../../interfaces';
import { ReduxActionFunc } from '../action/action';

const METADATA_KEY = Symbol('@ReduxActionController');

const METADATA_DEFAULT: IReduxReducerClassMetadata = {
  reducers: [],
};

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

    const metadata = getReduxReducerClassMetadata(target.constructor);
    metadata.reducers.push({types, reducer: target[ propertyKey ].bind(target)});
    Reflect[ 'defineMetadata' ](METADATA_KEY, metadata, target.constructor);

    // if (typeof target === 'object') {
    //   target[ propertyKey ].bind(target);
    // }

    return target[ propertyKey ];
  };

}

export function getReduxReducerClassMetadata(target: any): IReduxReducerClassMetadata {
  return Object.assign({}, METADATA_DEFAULT, Reflect[ 'getMetadata' ](METADATA_KEY, target));
}
