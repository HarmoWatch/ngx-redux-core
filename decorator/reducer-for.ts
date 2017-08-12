import { Reducer } from 'redux';
import { IAction } from '../interfaces';

export interface IReducerForDecorated {
  _reducerFor: {
    [key: string]: Reducer<{}>[];
  };
}

export function ReducerFor<S>(actionType: string | string[]) {
  const actionTypes = Array.isArray(actionType) ? actionType : [ actionType ];

  return (target: {}, propertyKey: string, descriptor: PropertyDescriptor): void => {

    const reducer = target as IReducerForDecorated;
    reducer._reducerFor = actionTypes.reduce((all, type) => {
      all[ type ] = all[ type ] || [];
      all[ type ].push(reducer[ propertyKey ].bind(reducer));
      return all;
    }, reducer._reducerFor || {});

  };
}

export function reduce(target: IReducerForDecorated, state: {}, action: IAction) {
  return target._reducerFor[ action.type ].reduce((reducedState, reducer) => reducer(reducedState, action), state);
}
