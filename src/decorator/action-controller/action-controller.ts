import { MetaDataManager } from '../../meta-data/manager';

export interface IReduxActionControllerType {
  new (...args: any[]): any;
}

export function ReduxActionController(prefix: string) {
  return <T extends IReduxActionControllerType>(constructor: T) => {
    MetaDataManager.setActionContextMetaData(constructor, {prefix});
    return constructor;
  };
}
