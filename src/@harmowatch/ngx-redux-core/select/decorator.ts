import 'rxjs/add/operator/distinctUntilChanged';

import { ReduxSelectorCacheFactory } from '../selector/cache/selector-cache.factory';
import { ReduxStateType } from '@harmowatch/redux-decorators';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: ReduxStateType): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: () => { // use a getter to be lazy
        return ReduxSelectorCacheFactory.getOrCreate(expression, context)
          .distinctUntilChanged();
      },
    });

  };
}
