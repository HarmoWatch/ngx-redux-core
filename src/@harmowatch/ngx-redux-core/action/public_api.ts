import { ReduxActionContextDecorator, ReduxActionDecorator } from '@harmowatch/redux-decorators';

export const ReduxAction = ReduxActionDecorator.forMethod;
export const ReduxActionContext = ReduxActionContextDecorator.forClass;

export * from './interface';
