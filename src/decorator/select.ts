import { select } from '../core/select';
import { ReduxStateConstructor } from './state/constructor';

export function ReduxSelect(selector: string, context?: ReduxStateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: select(selector, context),
    });

  };
}
