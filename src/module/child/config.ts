import { ReduxReducerClassType } from '../../reducer/class-type';
import { ReduxStateConstructor } from '../../state/constructor';

export interface ReduxModuleChildConfig {
  state?: ReduxStateConstructor;
  reducers?: ReduxReducerClassType[];
}
