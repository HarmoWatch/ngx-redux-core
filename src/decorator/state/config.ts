import { IReducerType } from '../../redux.module';

export interface IReduxStateConfig {
  name: string;
  reducers?: IReducerType[];
}
