import { select } from '../core/select';
import { IReduxStateType } from './state/state';

export function ReduxSelect(selector: string, context?: IReduxStateType): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: select(selector, context),
    });

  };
}
