import { ActionFunctionTypeArray } from '../../action/function-type-array';
import { ReduxReducerFunctionType } from '../function-type';

export interface ReduxReducerDecoratorMetadata {
  reducers: Array<{
    types: ActionFunctionTypeArray<{}>,
    reducer: ReduxReducerFunctionType<{}, {}>,
  }>;
}
