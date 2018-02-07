import { Injector } from '@angular/core';
import { ReduxStateDecorator } from '@harmowatch/redux-decorators';

import { ReduxStateProvider } from '../state/state.provider';
import { ReduxStateProviderType } from '../state/state.provider.type';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: ReduxStateProviderType<ReduxStateProvider<{}>>): PropertyDecorator {

  return (target: {}, propertyKey: string) => {
    const originalOnInit = target[ 'ngOnInit' ];

    Object.defineProperty(target, 'ngOnInit', {
      value: function (injector: Injector) {

        const stateName = ReduxStateDecorator.get(context).name;

        Object.defineProperty(target, propertyKey, {
          value: ReduxStateProvider.instancesByName[ stateName ].select(expression)
        });

        if (originalOnInit) {
          originalOnInit.apply(target, arguments);
        }
      }
    });

  };
}
