import { Type } from '@angular/core';
import { MetadataManager } from '../../metadata/manager';
import { ReduxActionContextConfig } from './decorator/config';

export function ReduxActionContext(config: ReduxActionContextConfig) {
  return <T extends Type<{}>>(constructor: T) => {
    MetadataManager.setActionContextMetadata(constructor, config);
    return constructor;
  };
}
