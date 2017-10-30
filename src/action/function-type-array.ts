import { ActionFunctionType } from './function-type';

export type ActionFunctionTypeArray<P> = ActionFunctionType<P> | Array<ActionFunctionType<P>>;
