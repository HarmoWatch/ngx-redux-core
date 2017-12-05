import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ReduxSelector } from '../selector';
import { ReduxStateProviderConstructor } from './provider.constructor';

/**
 * @deprecated Use "ReduxSelector" instead
 */
export class ReduxStateSelector<S = {}> {

  private selector: ReduxSelector<S>;

  constructor(expression: string,
              context?: ReduxStateProviderConstructor) {

    this.selector = new ReduxSelector<S>(expression, context);
  }

  public asObservable(): Observable<S> {
    return this.selector;
  }

}
