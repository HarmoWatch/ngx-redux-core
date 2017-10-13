import { OnReduxInit } from '../../interfaces';
import { ReduxRegistry } from '../../registry';
import { getReduxReducerClassMetadata, IReduxReducerClassMetadata } from '../reducer/reducer';

export const METADATA_KEY = Symbol('@ReduxActionController');

export const METADATA_DEFAULT: IReduxMetadata = {
  stateName: '',
};

export interface IReduxMetadata {
  stateName: string;
}

export interface IReducerType {
  new (...args: any[]): any;
}

export interface IReduxModuleType<S = {}> {
  new (...args: any[]): OnReduxInit<S> | any;
}

export interface IReduxModuleConfig {
  reducers?: IReducerType[];
  stateName: string;
}

export function Redux(config: IReduxModuleConfig) {
  return <T extends IReduxModuleType<{}>>(constructor: T) => {

    return class extends constructor {
      redux = (() => {
        const mergedConfig = Object.assign({
          reducers: [],
          stateName: '',
        }, config || {});

        const {stateName, reducers} = mergedConfig;

        // constructor[ '__@Redux' ] = mergedConfig;
        ReduxRegistry.registerModule(stateName, this);
        Reflect[ 'defineMetadata' ](METADATA_KEY, {
          stateName: mergedConfig.stateName,
        }, constructor);

        reducers
          .map((reducer) => getReduxReducerClassMetadata(reducer.constructor))
          .forEach((metadata: IReduxReducerClassMetadata) => {
            metadata.reducers.forEach(reducer => {
              ReduxRegistry.registerReducer(stateName, reducer.types, reducer.reducer);
            });
          });

        return config;
      })();
    };

  };
}

export function getReduxMetadata(target: any): IReduxMetadata {
  return METADATA_DEFAULT;// Object.assign({}, METADATA_DEFAULT, Reflect[ 'getMetadata' ](METADATA_KEY, target));
}
