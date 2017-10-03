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

export function ReduxReducer<S = any, P = any>(typeArray: ReduxReducerActionTypeArray<P>): ReduxReducerDecorator<S, P> {

  const types = (Array.isArray(typeArray) ? typeArray : [ typeArray ]).map((t) => {
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

    if (!target[ '__@ReduxReducer' ]) {
      target[ '__@ReduxReducer' ] = [];
    }

    types.forEach(type => {
      target[ '__@ReduxReducer' ].push({
        actionType: type,
        reducerFunction: target[ propertyKey ].bind(target),
      });
    });

    return target[ propertyKey ];
  };

}
