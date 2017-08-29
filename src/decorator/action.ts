import { ReduxRegistry } from '../registry';

export type ReduxActionFunc = (...rest) => {} | void;
export type ReduxActionDecorator = (target: object,
                                    propertyKey: string | symbol,
                                    descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => void;

export function ReduxAction(type?: string): ReduxActionDecorator {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => {

    const method = descriptor.value;

    type = type || [ target[ 'name' ] as string || target.constructor.name, propertyKey ].join('/');

    const proxyFunction = function () {
      const payload = method.apply(this, arguments);

      ReduxRegistry.getStore().then(store => store.dispatch({
        payload,
        type,
      }));

      return payload;
    };

    proxyFunction[ '__@ReduxAction' ] = {type};
    descriptor.value = proxyFunction;

  };
}
