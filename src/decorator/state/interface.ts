export interface ReduxStateInterface<S> {
  getInitialState(): S | Promise<S>;
}
