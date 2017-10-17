import { ReduxReducerClassType } from '../../reducer/class-type';

export interface ReduxStateDecoratorConfig {
  name: string;
  reducers?: ReduxReducerClassType[];
}
