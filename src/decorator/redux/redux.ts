import { OnReduxInit } from '../../index';
import { ReduxRegistry } from '../../registry';

export interface IReducerType {
  new (...args: any[]): any;
}

export interface IReduxModuleType<S = {}> {
  new (...args: any[]): OnReduxInit<S> | any;
}

export interface IReduxModuleConfig {
  reducers?: IReducerType[];
  stateName?: string;
}

export function Redux(config?: IReduxModuleConfig) {
  return <T extends IReduxModuleType<{}>>(constructor: T) => {

    return class extends constructor {
      redux = (() => {
        const mergedConfig = Object.assign({
          reducers: [],
          stateName: constructor.name,
        }, config || {});

        const {stateName, reducers} = mergedConfig;

        // constructor[ '__@Redux' ] = mergedConfig;
        ReduxRegistry.registerModule(stateName, this);

        reducers.reduce((previousValue, currentValue) => {
          return previousValue
            .concat(currentValue[ '__@ReduxReducer' ] || [])
            .concat(currentValue[ 'prototype' ][ '__@ReduxReducer' ] || []);
        }, []).forEach((r) => ReduxRegistry.registerReducer(stateName, r.actionType, r.reducerFunction));

        return config;
      })();
    };

  };
}
