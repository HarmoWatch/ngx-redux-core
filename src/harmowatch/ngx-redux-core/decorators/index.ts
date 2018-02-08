import {
  ReduxActionContextDecorator,
  ReduxActionContextDecoratorConfig,
  ReduxActionDecorator,
  ReduxActionDecoratorConfig,
  ReduxReducerDecorator,
  ReduxReducerDecoratorConfig,
  ReduxStateDecorator,
  ReduxStateDecoratorConfig,
} from '@harmowatch/redux-decorators';
import { MethodType } from '@harmowatch/redux-decorators/lib/generic/generic-decorator';

export * from './redux-select.decorator';

export function ReduxAction(config?: ReduxActionDecoratorConfig): MethodType<Function> {
  return ReduxActionDecorator.forMethod(config);
}

export function ReduxActionContext(config?: ReduxActionContextDecoratorConfig) {
  return ReduxActionContextDecorator.forClass(config);
}

export function ReduxState(config?: ReduxStateDecoratorConfig) {
  return ReduxStateDecorator.forClass(config);
}

export function ReduxReducer(config?: ReduxReducerDecoratorConfig) {
  return ReduxReducerDecorator.forMethod(config);
}
