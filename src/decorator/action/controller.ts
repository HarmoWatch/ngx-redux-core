import { Type } from '@angular/core';
import { MetadataManager } from '../../metadata/manager';

export function ReduxActionController(prefix: string) {
  return <T extends Type<{}>>(constructor: T) => {
    MetadataManager.setActionContextMetadata(constructor, {prefix});
    return constructor;
  };
}
