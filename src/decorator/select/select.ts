import { select } from '../../core/select';

export function ReduxSelect(selector: string): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: select(selector),
    });

  };
}
