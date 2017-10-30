import { ReducerClassType } from '../reducer/class-type';
import { StateConstructor } from './constructor';

export interface StateDefinition {
  provider: StateConstructor;
  reducers?: ReducerClassType[];
}
