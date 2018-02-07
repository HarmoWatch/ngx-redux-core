import {
  ReduxActionDecorator,
  ReduxActionContextDecorator,
  ReduxStateDecorator,
  ReduxReducerDecorator,
} from '@harmowatch/redux-decorators';

export * from './redux-select.decorator';

export const ReduxAction = ReduxActionDecorator.forMethod;
export const ReduxActionContext = ReduxActionContextDecorator.forClass;
export const ReduxState = ReduxStateDecorator.forClass;
export const ReduxReducer = ReduxReducerDecorator.forMethod;
