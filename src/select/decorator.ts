import { MetadataManager } from '../metadata/manager';
import { ReduxStateConstructor } from '../state/constructor';
import { ReduxStateSelector } from '../state/selector';
import { reduxStateSelectorDataTypeFactory } from '../state/selector/data-type-factory';

export function ReduxSelectDecorator(expression: string, context?: ReduxStateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    const propertyType = MetadataManager.getPropertyType(target, propertyKey);

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: new ReduxStateSelector(expression, context)
        .getByDataType(reduxStateSelectorDataTypeFactory(propertyType), null),
    });

  };
}
