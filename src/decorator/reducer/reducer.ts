import { ReduxRegistry } from '../../registry';
import { ReduxActionFunc } from '../action/action';

export interface IReduxReducerAction<P = any> {
  payload: P;
}

export type ReduxReducerFunc<S, P> = (state: S, action?: IReduxReducerAction<P>) => S;
export type ReduxReducerDecorator<S, P>
  = (target: object,
     propertyKey: string | symbol,
     descriptor: TypedPropertyDescriptor<ReduxReducerFunc<S, P>>) => TypedPropertyDescriptor<ReduxReducerFunc<S, P>>;

export type ReduxReducerActionType<P> = ReduxActionFunc<Promise<P>> | ReduxActionFunc<P> | string;
export type ReduxReducerActionTypeArray<P> = ReduxReducerActionType<P> | Array<ReduxReducerActionType<P>>;

export function ReduxReducer<S = any, P = any>(type: ReduxReducerActionTypeArray<P>): ReduxReducerDecorator<S, P> {

  const types = (Array.isArray(type) ? type : [ type ]).map((t) => {
    if (typeof t === 'function') {

      if (!t[ '__@ReduxAction' ] || !t[ '__@ReduxAction' ].type) {
        throw new Error('Unable to resolve action type. Make sure you\'ve decorated the target by @ReduxAction');
      }

      return t[ '__@ReduxAction' ].type;
    }

    return t;
  });

  return (target: object, propertyKey: string) => {
    if (typeof target === 'object') {
      target[ propertyKey ].bind(target);
    }

    types.forEach(t => ReduxRegistry.registerReducer(t, target[ propertyKey ]));
    return target[ propertyKey ];
  };

}
