import { Store } from 'redux';
import { ReduxModuleChildConfig } from '../child/config';

export interface ReduxModuleRootConfig extends ReduxModuleChildConfig {
  storeFactory?(): Store<{}>;
}
