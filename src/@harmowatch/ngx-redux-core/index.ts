import {
  ReduxActionContextDecorator,
  ReduxActionDecorator,
  ReduxActionDispatcher,
  ReduxReducerDecorator
} from '@harmowatch/redux-decorators';
import { Action } from 'redux';

export * from './module/public_api';
export * from './select/public_api';
export * from './state/public_api';
export * from './store/public_api';
export * from './testing/public_api';
export * from './selector/selector';
export * from './selector/cache/selector-cache.factory';
export * from './module';

export {
  ReduxActionFunction,
  ReduxReducerType,
  ReduxStateInterface as ReduxStateProvider,
  ReduxStateType as ReduxStateProviderType
} from '@harmowatch/redux-decorators';

export const ReduxAction = ReduxActionDecorator.forMethod;
export const ReduxActionContext = ReduxActionContextDecorator.forClass;
export const getActionType = ReduxActionDispatcher.getType;

export const ReduxReducer = ReduxReducerDecorator.forMethod;

export interface ActionWithPayload<P = void> extends Action {
  type: string;
  payload?: P;
}

/**
 * interface doesn't work @see https://github.com/angular/angular-cli/issues/2034#issuecomment-302666897 :/
 * @deprecated Please use ActionWithPayload instead
 */
export class ActionInterface<P = void> {
  type: string;
  payload?: P;
}
