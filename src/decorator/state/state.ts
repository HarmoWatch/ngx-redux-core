import { IReducerType } from '../../redux.module';
import { ReduxRegistry } from '../../registry';

const METADATA_KEY = Symbol('@ReduxState');

const METADATA_DEFAULT: IReduxStateConfig = {
  name: '',
  reducers: [],
};

export interface IReduxState<S> {
  initialize(): S | Promise<S>;
}

export interface IReduxStateType {
  new (...args: any[]): IReduxState<{}>;
}

export interface IReduxStateConfig {
  name: string;
  reducers?: IReducerType[];
}

export function ReduxState(config: IReduxStateConfig) {
  return <T extends IReduxStateType>(constructor: T) => {
    Reflect[ 'defineMetadata' ](METADATA_KEY, config, constructor);
    ReduxRegistry.registerState(constructor);
    return constructor;
  };
}

export function getReduxStateMetadata(target: any): IReduxStateConfig {
  return Object.assign({}, METADATA_DEFAULT, Reflect[ 'getMetadata' ](METADATA_KEY, target));
}
