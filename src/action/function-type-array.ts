import { ReduxActionFunctionType } from './function-type';

export type ReduxActionFunctionTypeArray<P> = ReduxActionFunctionType<P> | Array<ReduxActionFunctionType<P>>;
