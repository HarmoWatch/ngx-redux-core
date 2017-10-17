import { Type } from '@angular/core';
import { MetadataManager } from '../../metadata/manager';
import { ReduxActionContextDecoratorConfig } from './decorator/config';

export function ReduxActionContextDecorator(config: ReduxActionContextDecoratorConfig) {
  return <T extends Type<{}>>(constructor: T) => {
    MetadataManager.setActionContextMetadata(constructor, config);
    return constructor;
  };
}
