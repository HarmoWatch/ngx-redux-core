import { MetadataManager } from '../metadata/manager';
import { ReduxRegistry } from '../registry';
import { ReduxActionDecoratorConfig } from './decorator/config';
import { ReduxActionDecoratorType } from './decorator/type';
import { ReduxActionFunctionType } from './function-type';

export function ReduxActionDecorator(config?: ReduxActionDecoratorConfig): ReduxActionDecoratorType {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ReduxActionFunctionType>) => {

    config = Object.assign({
      type: propertyKey,
    }, config || {});

    const originalFunction = descriptor.value;
    const proxyFunction = function () {
      const contextData = MetadataManager.getActionContextMetadata(target.constructor);

      const type = getActionType(contextData.prefix, config.type);
      const returnValue = originalFunction.apply(this, arguments);

      Promise.all([
        Promise.resolve(returnValue),
        ReduxRegistry.getStore(),
      ]).then(([ payload, store ]) => {
        store.dispatch({payload, type});
      });

      return returnValue;
    };

    MetadataManager.setActionMetadata(proxyFunction, {
      contextClazz: target.constructor,
      type: config.type,
    });

    descriptor.value = proxyFunction;

  };
}

export function getActionTypeByFunction(target: ReduxActionFunctionType<{}>) {
  const {type, contextClazz} = MetadataManager.getActionMetadata(target);
  const {prefix} = MetadataManager.getActionContextMetadata(contextClazz);
  return getActionType(prefix, type);
}

export function getActionType(...rest: Array<string | symbol>): string {
  return rest.filter((i: string) => i.length > 0).join('/');
}
