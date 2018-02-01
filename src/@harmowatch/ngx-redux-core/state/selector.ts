import 'rxjs/add/operator/map';

import { ReduxStateType } from '@harmowatch/redux-decorators';
import { Observable } from 'rxjs/Observable';
import { ReduxSelector } from '../selector/selector';

/**
 * @deprecated Use "ReduxSelector" instead
 */
export class ReduxStateSelector<S = {}> {

  private selector: ReduxSelector<S>;

  constructor(expression: string,
              context?: ReduxStateType) {

    this.selector = new ReduxSelector<S>(expression, context);
  }

  public asObservable(): Observable<S> {
    return this.selector;
  }

}
