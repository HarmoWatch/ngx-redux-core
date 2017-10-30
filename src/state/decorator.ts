import { MetadataManager } from '../metadata/manager';
import { StateConstructor } from './constructor';
import { ReduxStateConfig } from './decorator/config';

export function ReduxState(config: ReduxStateConfig) {
  return <T extends StateConstructor>(constructor: T) => {
    MetadataManager.setStateMetadata(constructor, config);
    return constructor;
  };
}
