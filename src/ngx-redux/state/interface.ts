import { Observable } from 'rxjs/Observable';

/**
 * @deprecated Please use "ReduxStateProvider" instead
 */
export interface ReduxStateInterface<S> {
  getInitialState(): S | Promise<S> | Observable<S>;
}
