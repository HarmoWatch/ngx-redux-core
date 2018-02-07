import { ReduxStateDecorator } from '@harmowatch/redux-decorators';

import { ReduxStateProvider } from '../providers/redux-state.provider';
import { ReduxStateProviderType } from '../interfaces/redux-state.provider.interface';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: ReduxStateProviderType<ReduxStateProvider<{}>>): PropertyDecorator {

  return (target: {}, propertyKey: string) => {
    const stateName = ReduxStateDecorator.get(context).name;

    Object.defineProperty(target, propertyKey, {
      get: () => ReduxStateProvider.instancesByName[ stateName ].select(expression)
    });

  };
}
