import { Type } from '@angular/core';
import { ReduxStateDecorator } from '@harmowatch/redux-decorators';

import { ReduxStateProvider } from '../providers/redux-state.provider';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: Type<ReduxStateProvider>): PropertyDecorator {

  return (target: {}, propertyKey: string) => {
    const stateName = ReduxStateDecorator.get(context).name;

    Object.defineProperty(target, propertyKey, {
      get: () => ReduxStateProvider.instancesByName[ stateName ].select(expression)
    });

  };
}
