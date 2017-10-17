import { MetadataManager } from '../metadata/manager';
import { ReduxRegistry } from '../registry';
import { ReduxActionConfig } from './action/config';
import { ReduxActionDecorator } from './action/decorator';
import { ReduxActionFunc, ReduxReducerActionType } from './action/function';

export function ReduxAction(config?: ReduxActionConfig): ReduxActionDecorator {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => {

    config = config || {type: propertyKey};

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

export function getActionTypeByFunction(target: ReduxReducerActionType<{}>) {
  const {type, contextClazz} = MetadataManager.getActionMetadata(target);
  const {prefix} = MetadataManager.getActionContextMetadata(contextClazz);
  return getActionType(prefix, type);
}

export function getActionType(...rest: Array<string | symbol>): string {
  return rest.filter((i: string) => i.length > 0).join('/');
}
