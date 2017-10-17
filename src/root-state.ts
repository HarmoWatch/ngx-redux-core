export interface ReduxRootState<T = {}> {
  module: {
    [key: string]: T;
  };
}
