import { MetaDataManager } from '../../meta-data/manager';
import { IReducerType } from '../../redux.module';

export interface IReduxState<S> {
  getInitialState(): S | Promise<S>;
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
    MetaDataManager.setStateMetaData(constructor, config);
    return constructor;
  };
}
