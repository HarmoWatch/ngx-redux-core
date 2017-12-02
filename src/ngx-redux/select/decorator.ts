import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { StateConstructor } from '../state/constructor';
import { ReduxStateSelector } from '../state/selector';

export function ReduxSelect<S = {}>(expression: string,
                                    context?: StateConstructor): PropertyDecorator {
  return (target: {}, propertyKey: string) => {

    let observable: Observable<S>;

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: () => { // use a getter to be lazy
        if (!observable) {
          observable = new ReduxStateSelector<S>(expression, context)
            .asObservable()
            .distinctUntilChanged();
        }

        return observable;
      },
    });

  };
}
