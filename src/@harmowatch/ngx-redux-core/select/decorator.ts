import { Injector } from '@angular/core';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';
import { ReduxStateDecorator, ReduxStateType } from '@harmowatch/redux-decorators';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: ReduxStateType<ReduxStateProvider<{}>>): PropertyDecorator {

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
