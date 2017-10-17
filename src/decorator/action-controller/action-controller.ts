import { MetadataManager } from '../../metadata/manager';

export interface IReduxActionControllerType {
  new (...args: any[]): any;
}

export function ReduxActionController(prefix: string) {
  return <T extends IReduxActionControllerType>(constructor: T) => {
    MetadataManager.setActionContextMetadata(constructor, {prefix});
    return constructor;
  };
}
