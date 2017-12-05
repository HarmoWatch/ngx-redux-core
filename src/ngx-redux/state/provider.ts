import { Observable } from 'rxjs/Observable';

export interface ReduxStateProvider<S> {
  getInitialState(): S | Promise<S> | Observable<S>;
}
