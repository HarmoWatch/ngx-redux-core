import { Reducer } from 'redux';
import { IAction } from '../../interfaces';

export interface IReducer {
  reducerFunctions: {
    [key: string]: Reducer<{}>[];
  };
}

export function ReduxReducer<S>(actionType: any | string | string[]) {

  if (typeof actionType === 'function') {
    actionType = actionType['__@ReduxAction'] ? actionType['__@ReduxAction'].type : null;
  }

  if (!actionType) {
    // @todo throw exception
    return;
  }

  const types = Array.isArray(actionType) ? actionType : [ actionType ];

  return (target: {}, propertyKey: string): void => {
    const reducer = target as IReducer;
    reducer.reducerFunctions = types.reduce((all, t) => {
      all[ t ] = all[ t ] || [];
      all[ t ].push(reducer[ propertyKey ].bind(reducer));
      return all;
    }, reducer.reducerFunctions || {});
  };
}

export function reduce(target: IReducer, state: {}, action: IAction) {
  return target.reducerFunctions[ action.type ].reduce((reducedState, reducer) => reducer(reducedState, action), state);
}
