import { Provider } from '@angular/core';
import { ReduxModuleChildConfig } from '../child/config';

export interface ReduxModuleRootConfig extends ReduxModuleChildConfig {
  store?: Provider;
}
