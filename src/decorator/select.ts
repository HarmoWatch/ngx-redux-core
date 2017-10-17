import { ReduxSelector } from '../selector';
import { ReduxStateConstructor } from './state/constructor';

export function ReduxSelect(expression: string, context?: ReduxStateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: new ReduxSelector(expression, context).subscribe(),
    });

  };
}
