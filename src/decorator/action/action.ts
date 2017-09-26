import { IReduxAction } from '../../interfaces';
import { ReduxRegistry } from '../../registry';

export type ReduxActionFunc<P = {} | void> = (...rest) => P;
export type ReduxActionDecorator = (target: object,
                                    propertyKey: string | symbol,
                                    descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => void;

function dispatch(action: IReduxAction) {
  ReduxRegistry.getStore().then(store => store.dispatch(action));
}

export function ReduxAction(customType?: string): ReduxActionDecorator {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => {

    const method = descriptor.value;
    const type = customType || [
      target[ 'name' ] as string || target.constructor.name,
      propertyKey,
    ].join(target[ 'name' ] ? '/static/' : '/');

    const proxyFunction = function () {
      const payload = method.apply(this, arguments);

      if (payload instanceof Promise) {
        payload.then((p) => dispatch({payload: p, type}));
      } else {
        dispatch({payload, type});
      }

      return payload;
    };

    proxyFunction[ '__@ReduxAction' ] = {type};
    descriptor.value = proxyFunction;

  };
}
