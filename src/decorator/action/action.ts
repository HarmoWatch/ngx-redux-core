import { IReduxAction } from '../../interfaces';
import { ReduxRegistry } from '../../registry';
import { getReduxActionControllerMetadata } from '../action-controller/action-controller';
import { ReduxReducerActionType } from '../reducer/reducer';

export type ReduxActionFunc<P = {} | void> = (...rest) => P;
export type ReduxActionDecorator = (target: object,
                                    propertyKey: string | symbol,
                                    descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => void;

function dispatch(action: IReduxAction) {
  ReduxRegistry.getStore().then(store => store.dispatch(action));
}

const METADATA_KEY = Symbol('@ReduxActionController');

const METADATA_DEFAULT: IReduxActionMetadata = {
  methodType: '',
  targetConstructor: null,
};

export interface IReduxActionMetadata {
  methodType: string;
  targetConstructor: any;
}

export function ReduxAction(customType?: string): ReduxActionDecorator {

  return (target: object, propertyKey, descriptor: TypedPropertyDescriptor<ReduxActionFunc>) => {
    const methodType = customType || propertyKey;
    const method = descriptor.value;

    const proxyFunction = function () {
      const metadata = getReduxActionControllerMetadata(target.constructor);
      const type = getActionType(metadata.actionPrefix, methodType);
      const payload = method.apply(this, arguments);

      if (payload instanceof Promise) {
        payload.then((p) => dispatch({payload: p, type}));
      } else {
        dispatch({payload, type});
      }

      return payload;
    };

    Reflect[ 'defineMetadata' ](METADATA_KEY, {
      methodType,
      targetConstructor: target.constructor,
    }, proxyFunction);
    descriptor.value = proxyFunction;

  };
}

export function getReduxActionMetadata(target: any): IReduxActionMetadata {
  return Object.assign({}, METADATA_DEFAULT, Reflect[ 'getMetadata' ](METADATA_KEY, target));
}

export function getActionTypeByFunction(type: ReduxReducerActionType<{}>) {
  const {methodType, targetConstructor} = getReduxActionMetadata(type);
  const {actionPrefix} = getReduxActionControllerMetadata(targetConstructor);
  return getActionType(actionPrefix, methodType);
}

export function getActionType(...rest: Array<string | symbol>): string {
  return rest.filter((i: string) => i.length > 0).join('/');
}
