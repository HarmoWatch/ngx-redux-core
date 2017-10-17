export interface ReduxModuleRootState<T = {}> {
  module: {
    [key: string]: T;
  };
}
