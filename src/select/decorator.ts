import { StateConstructor } from '../state/constructor';
import { ReduxStateSelector } from '../state/selector';

export function ReduxSelect(expression: string,
                            context?: StateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: new ReduxStateSelector(expression, context).getObservable(),
    });

  };
}
