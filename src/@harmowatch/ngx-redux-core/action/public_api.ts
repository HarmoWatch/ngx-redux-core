import { ReduxActionContextDecorator, ReduxActionDecorator, ReduxActionDispatcher } from '@harmowatch/redux-decorators';

export const ReduxAction = ReduxActionDecorator.forMethod;
export const ReduxActionContext = ReduxActionContextDecorator.forClass;
export const getActionType = ReduxActionDispatcher.getType;

export * from './interface';
