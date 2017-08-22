import { Reducer } from 'redux';
import { IAction } from '../../interfaces';

export interface IReducer {
  reducerFunctions: {
    [key: string]: Reducer<{}>[];
  };
}

export function ReduxReducer<S>(type: string | string[]) {
  const types = Array.isArray(type) ? type : [ type ];

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
