import { Store } from 'redux';
import { ReduxModuleChildConfig } from 'harmowatch/ngx-redux-core/interfaces/redux-child-module-config.interface';

export interface ReduxModuleRootConfig extends ReduxModuleChildConfig {
  storeFactory?(): Store<{}>;
}
