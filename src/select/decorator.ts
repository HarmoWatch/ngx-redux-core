import { ReduxStateConstructor } from '../state/constructor';
import { ReduxStateSelector } from '../state/selector';

export function ReduxSelectDecorator(expression: string, context?: ReduxStateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: new ReduxStateSelector(expression, context).asObservable(),
    });

  };
}
