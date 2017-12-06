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

    const proxy = ReduxActionManager.createProxy(descriptor);
    MetadataManager.setActionMetadata(proxy, {
      contextClazz: target.constructor,
      type: config.type,
    });

    descriptor.value = proxy;

  };
}
