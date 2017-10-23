import { Observable } from 'rxjs/Observable';

export interface ReduxStateInterface<S> {
  getInitialState(): S | Promise<S> | Observable<S>;
}
