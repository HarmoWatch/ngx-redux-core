export * from './action/with/payload/action-with-payload.interface';
export * from './common/module';
export * from './decorators';
export * from './module/child/config';
export * from './module/root/config';
export * from './module/root/state';
export * from './reducer/reducer.provider';
export * from './select/decorator';
export * from './select/pipe';
export * from './selector/selector';
export * from './state/definition/token';
export * from './state/definition';
export * from './state/state.provider';
export * from './state/state.provider.type';
export * from './store/token';
export * from './testing/store';
export * from './testing/state';
export * from './testing/module';
export * from './module';
export * from './registry';

import { ReduxActionDispatcher } from '@harmowatch/redux-decorators';

export const getActionType = ReduxActionDispatcher.getType;
export const dispatch = ReduxActionDispatcher.dispatch;
