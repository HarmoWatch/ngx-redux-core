import { ReduxActionFunctionTypeArray} from '../action/function-type-array';
import { ReduxReducerFunctionType } from './function-type';

export interface ReduxReducerMetadata {
  reducers: Array<{
    types: ReduxActionFunctionTypeArray<{}>,
    reducer: ReduxReducerFunctionType<{}, {}>,
  }>;
}
