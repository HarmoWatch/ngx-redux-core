import { StateConstructor } from '../state/constructor';
import { ReduxStateSelector } from '../state/selector';

export function ReduxSelect(expression: string,
                            context?: StateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    let selector: ReduxStateSelector;

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: () => { // use a getter to be lazy
        if (!selector) {
          selector = new ReduxStateSelector(expression, context);
        }

        return selector.getObservable();
      },
    });

  };
}
