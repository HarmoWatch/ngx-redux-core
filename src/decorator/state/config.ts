import { ReduxReducerClassType } from '../reducer/class-type';

export interface IReduxStateConfig {
  name: string;
  reducers?: ReduxReducerClassType[];
}
