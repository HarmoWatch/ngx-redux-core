import { MetadataManager } from '../metadata/manager';
import { ReduxActionConfig } from './decorator/config';
import { ReduxActionDecoratorType } from './decorator/type';
import { ActionFunctionType } from './function-type';
import { ReduxActionManager } from './manager/redux-action-manager';

export function ReduxAction(config?: ReduxActionConfig): ReduxActionDecoratorType {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ActionFunctionType>) => {

    config = {
      type: propertyKey,
      ...config,
    };

    const originalFunction = descriptor.value;
    const proxyFunction = function () {
      const returnValue = originalFunction.apply(this, arguments);
      ReduxActionManager.dispatch(target[ propertyKey ], returnValue);
      return returnValue;
    };

    MetadataManager.setActionMetadata(proxyFunction, {
      contextClazz: target.constructor,
      type: config.type,
    });

    descriptor.value = proxyFunction;

  };
}
