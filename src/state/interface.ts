import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

export interface ReduxStateInterface<S> {
  getInitialState(): S | Promise<S> | PromiseObservable<{}>;
}
