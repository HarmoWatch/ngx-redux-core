import { MetadataManager } from '../metadata/manager';
import { ReduxStateConstructor } from './constructor';
import { ReduxStateDecoratorConfig } from './decorator/config';

export function ReduxStateDecorator(config: ReduxStateDecoratorConfig) {
  return <T extends ReduxStateConstructor>(constructor: T) => {
    MetadataManager.setStateMetadata(constructor, config);
    return constructor;
  };
}
