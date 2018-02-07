import { Store } from 'redux';
import { ReduxModuleChildConfig } from './redux-child-module-config.interface';

export interface ReduxModuleRootConfig extends ReduxModuleChildConfig {
  storeFactory?(): Store<{}>;
}
