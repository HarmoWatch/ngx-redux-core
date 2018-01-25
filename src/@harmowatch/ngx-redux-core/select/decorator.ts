import 'rxjs/add/operator/distinctUntilChanged';

import { ReduxStateType } from '@harmowatch/redux-decorators';
import { Observable } from 'rxjs/Observable';
import { ReduxSelector } from '../selector';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: ReduxStateType): PropertyDecorator {
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
