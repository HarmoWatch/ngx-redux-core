import {
  ReduxActionDecorator,
  ReduxActionContextDecorator,
  ReduxStateDecorator,
  ReduxReducerDecorator,
} from '@harmowatch/redux-decorators';

export const ReduxAction = ReduxActionDecorator.forMethod;
export const ReduxActionContext = ReduxActionContextDecorator.forClass;
export const ReduxState = ReduxStateDecorator.forClass;
export const ReduxReducer = ReduxReducerDecorator.forMethod;
