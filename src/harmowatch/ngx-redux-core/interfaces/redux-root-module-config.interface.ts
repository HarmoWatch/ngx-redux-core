import { Store } from 'redux';
import { ReduxChildModuleConfig } from './redux-child-module-config.interface';
import { ReduxReducerProvider } from '../providers/redux-reducer.provider';
import { ReduxRootState } from './redux-root-state.interface';

export interface ReduxRootModuleConfig<S> extends ReduxChildModuleConfig<S> {
  middlewareFunctions?: Function[];
  storeFactory?(reduxReducerProvider: ReduxReducerProvider): Store<ReduxRootState>;
}
