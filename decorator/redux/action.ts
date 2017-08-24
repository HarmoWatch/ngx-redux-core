/* tslint:disable */
import { ReduxRegistry } from '../../registry';

export function ReduxAction(actionType?: string): MethodDecorator {

  return (target, propertyKey, descriptor: PropertyDescriptor) => {

    const method = descriptor.value;

    actionType = actionType || [target['name'] || target.constructor.name, propertyKey].join('/');

    const proxyFunction = function () {
      this.__reduxActionType = actionType;
      const payload = method.apply(this, arguments);

      ReduxRegistry.store.then(store => {
        store.dispatch({ type: actionType, payload });
      });

      return payload;
    };

    proxyFunction['__@ReduxAction'] = {type: actionType};

    descriptor.value = proxyFunction;

  };
}
