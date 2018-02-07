import { Store } from 'redux';
import { ReduxModuleChildConfig } from '@harmowatch/ngx-redux-core/module/child/config';

export interface ReduxModuleRootConfig extends ReduxModuleChildConfig {
  storeFactory?(): Store<{}>;
}
