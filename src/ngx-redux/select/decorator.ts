import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { ReduxSelector } from '../selector';
import { ReduxStateProviderConstructor } from '../state/provider.constructor';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: ReduxStateProviderConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    let observable: Observable<S>;

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: () => { // use a getter to be lazy
        if (!observable) {
          observable = new ReduxSelector<S>(expression, context).distinctUntilChanged();
        }

        return observable;
      },
    });

  };
}
