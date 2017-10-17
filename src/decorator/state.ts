import { MetadataManager } from '../metadata/manager';
import { IReduxStateConfig } from './state/config';
import { ReduxStateConstructor } from './state/constructor';

export function ReduxState(config: IReduxStateConfig) {
  return <T extends ReduxStateConstructor>(constructor: T) => {
    MetadataManager.setStateMetadata(constructor, config);
    return constructor;
  };
}
