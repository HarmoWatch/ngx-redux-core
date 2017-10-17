import { ReduxReducerActionTypeArray} from '../action/function';
import { ReduxReducerFunction } from './function';

export interface ReduxReducerMetadata {
  reducers: Array<{
    types: ReduxReducerActionTypeArray<{}>,
    reducer: ReduxReducerFunction<{}, {}>,
  }>;
}
