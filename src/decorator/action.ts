import { ReduxRegistry } from '../registry';

export function ReduxAction(actionType?: string): MethodDecorator {

  return (target: {} | { name: string }, propertyKey, descriptor: PropertyDescriptor) => {

    const method = descriptor.value;

    actionType = actionType || [ target[ 'name' ] as string || target.constructor.name, propertyKey ].join('/');

    const proxyFunction = function () {
      const payload = method.apply(this, arguments);
      ReduxRegistry.getStore().then(store => store.dispatch({type: actionType, payload}));
      return payload;
    };

    proxyFunction[ '__@ReduxAction' ] = {type: actionType};

    descriptor.value = proxyFunction;

  };
}
