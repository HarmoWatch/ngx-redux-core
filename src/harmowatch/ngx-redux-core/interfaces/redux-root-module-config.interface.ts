import { Store } from 'redux';
import { ReduxChildModuleConfig } from './redux-child-module-config.interface';

export interface ReduxRootModuleConfig<S> extends ReduxChildModuleConfig<S> {
  storeFactory?(): Store<{}>;
}
