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
      redux = (() => ReduxRegistry.registerModule(/*config, constructor, */this))();
    };

  };
}
