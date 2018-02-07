export * from './interfaces/redux-action.interface';

export * from './decorators';
export * from './interfaces/redux-child-module-config.interface';
export * from './interfaces/redux-root-module-config.interface';
export * from './interfaces/redux-root-state.interface';
export * from './providers/redux-reducer.provider';
export * from './decorators/redux-select.decorator';
export * from './pipes/redux-select.pipe';
export * from './redux-selector';
export * from './tokens/redux-state-definition.token';
export * from './interfaces/redux-state-definition.interface';
export * from './providers/redux-state.provider';
export * from './state/state.provider.type';
export * from './tokens/redux-store.token';
export * from './testing/store';
export * from './testing/state';
export * from './providers/redux-registry';

export { ReduxModule } from '@harmowatch/ngx-redux-core/redux.module';

import { ReduxActionDispatcher } from '@harmowatch/redux-decorators';

export const getActionType = ReduxActionDispatcher.getType;
export const dispatch = ReduxActionDispatcher.dispatch;
