import { Provider } from '@angular/core';
import { ReduxModuleChildConfig } from '../child/config';
import { Store } from 'redux';

export interface ReduxModuleRootConfig extends ReduxModuleChildConfig {
  storeFactory?: () => Store<{}>;
}
