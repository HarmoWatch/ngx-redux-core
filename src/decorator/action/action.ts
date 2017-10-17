import { IReduxAction } from '../../interfaces';
import { MetaDataManager } from '../../meta-data/manager';
import { ReduxRegistry } from '../../registry';
import { ReduxReducerActionType } from '../reducer/reducer';

export type ReduxActionFunc<P = {} | void> = (...rest) => P;
export type ReduxActionDecorator = (target: object,
                                    propertyKey: string | symbol,
                                    descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => void;

function dispatch(action: IReduxAction) {
  ReduxRegistry.getStore().then(store => store.dispatch(action));
}

export function ReduxAction(customType?: string): ReduxActionDecorator {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => {
    const methodType = customType || propertyKey;
    const method = descriptor.value;

    const proxyFunction = function () {
      const metadata = MetaDataManager.getActionContextMetaData(target.constructor);
      const type = getActionType(metadata.prefix, methodType);
      const payload = method.apply(this, arguments);

      if (payload instanceof Promise) {
        payload.then((p) => dispatch({payload: p, type}));
      } else {
        dispatch({payload, type});
      }

      return payload;
    };

    MetaDataManager.setActionMetaData(proxyFunction, {
      methodType,
      targetConstructor: target.constructor,
    });

    descriptor.value = proxyFunction;

  };
}

export function getActionTypeByFunction(type: ReduxReducerActionType<{}>) {
  const {methodType, targetConstructor} = MetaDataManager.getActionMetaData(type);
  const {prefix} = MetaDataManager.getActionContextMetaData(targetConstructor);
  return getActionType(prefix, methodType);
}

export function getActionType(...rest: Array<string | symbol>): string {
  return rest.filter((i: string) => i.length > 0).join('/');
}
